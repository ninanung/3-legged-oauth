const express = require('express');
const router = express.Router();
const database = require('../database');
const rs = require('randomstring');

let serverState = '';
let serverCode = '';

router.get('/app', function(req, res, next) {
    const query = req.query;
    const client_id = query.client_id;
    const redirect_url = query.redirect_url;
    const scope = query.scope;
    const state = query.state;
    for(let i in database.apps) {
        const app = database.apps[i];
        if(app.client_id === client_id && app.redirect_url === redirect_url) {
            const code = rs.generate();
            serverState = state;
            serverCode = code;
            return res.redirect(`http://localhost:3000/auth?code=${code}&state=${state}&client_id=${client_id}&scope=${scope}&redirect_url=${redirect_url}`);
        }
    }
    return res.redirect(404, 'http://localhost:3000/notfound');
})

router.get('/register', function(req, res, next) {
    const query = req.query;
    const code = query.code;
    const state = query.state;
    const client_id = query.client_id;
    const redirect_url = query.redirect_url;
    const user_id = query.user_id;
    const scope = query.scope;
    let sendData = {
        registered: false,
        url: `${redirect_url}?code=${code}&state=${state}`,
    }
    for(let app of database.apps) {
        if(app.client_id === client_id && app.redirect_url === redirect_url) {
            for(let user of app.registered_user_ids) {
                if(user.user_id === user_id) {
                    user.state = state;
                    sendData.registered = true;
                    return res.status(200).json(sendData);
                }
            }
            app.registered_user_ids.push({
                state,
                user_id,
                scope,
            })
            return res.status(200).json(sendData);
        }
    }
    return res.redirect(404, 'http://localhost:3000/notfound')
});

router.post('/token', function(req, res, next) {
    const query = req.query;
    const code = query.code;
    const state = query.state;
    const client_id = query.client_id;
    const redirect_url = query.redirect_url;
    const client_secret = query.client_secret;
    let user_id = '';
    for(let app of database.apps) {
        if(app.client_id === client_id && app.redirect_url === redirect_url && app.client_secret === client_secret) {
            if(serverState === state && serverCode === code) {
                for(let user of app.registered_user_ids) {
                    if(user.state === state) {
                        user_id = user.user_id;
                    }
                }
                let already = false;
                const newToken = rs.generate();
                for(let token of database.tokens) {
                    if(token.client_id === client_id && token.user_id === user_id) {
                        token.token = newToken;
                        already = true;
                    }
                }
                if(!already) {
                    database.tokens.push({
                        token: newToken,
                        client_id,
                        user_id
                    })
                }
                return res.status(200).json(newToken);
            }
        }
    }
    return res.status(401).json({error: 'invalid request'});
});

module.exports = router;