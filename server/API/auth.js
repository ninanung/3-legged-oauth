const express = require('express');
const router = express.Router();
const functions = require('../functions');
const database = require('../database');
const rs = require('randomstring');

router.get('/account', function(req, res, next) {
    const query = req.query;
    const username = query.username;
    const password = query.password;

    let user_id = functions.login(username, password);
    let sendData = {
        user_id: '',
        error: '',
    }
    if(user_id) {
        sendData.user_id = user_id;
        return res.send(sendData);
    }
    sendData.error = 'Authorization failed. There\'s no account matched with Username and Password';
    return res.send(sendData);
});

router.get('/app', function(req, res, next) {
    const query = req.query;
    const user_id = query.user_id;
    const client_id = query.client_id;
    const redirect_url = query.redirect_url;
    const scope = query.scope;
    const state = query.state;

    for(let i in database.apps) {
        const app = database.apps[i];
        if(app.client_id === client_id && app.redirect_url === redirect_url) {
            const code = rs.generate();
            database.apps[i].registered_user_ids.push({
                user_id,
                scope
            })
            res.cookie('state', state);
            res.cookie('code', code);
            return res.redirect(`${redirect_url}?code=${code}&state=${state}`);
        }
    }
    return res.send('Authorization failed. Please, check the app you try to codeorize is really safe.');
})

router.get('/token', function(req, res, next) {
    const query = req.query;
    const code = query.code;
    const state = query.state;
    const client_id = query.client_id;
    const redirect_url = query.redirect_url;
    const client_secret = query.secret;
    for(let app of database.apps) {
        if(app.client_id === client_id && app.redirect_url === redirect_url && app.client_secret === client_secret) {
            if(req.cookies.state === state && req.cookies.code === code) {
                const token = rs.generate()
                database.tokens.push({
                    token,
                    client_id,
                    user_id
                })
                res.clearCookie('state');
                res.clearCookie('code');
                return res.send(token);
            }
        }
    }
    return res.status(401).send({error: 'invalid request'});
});

module.exports = router;