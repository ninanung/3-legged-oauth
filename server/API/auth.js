const express = require('express');
const router = express.Router();
const database = require('../database');
const rs = require('randomstring');

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
            req.session.state = state;
            req.session.code = code;
            req.session.user_id = user_id;
            return res.send(`${redirect_url}?code=${code}&state=${state}`);
        }
    }
    return res.status(401).send({error: 'authorization failed. check the app you try to authorize is really correct.'});
})

router.get('/token', function(req, res, next) {
    const query = req.query;
    const code = query.code;
    const state = query.state;
    const client_id = query.client_id;
    const redirect_url = query.redirect_url;
    const client_secret = query.client_secret;
    const user_id = req.session.user_id;
    for(let app of database.apps) {
        if(app.client_id === client_id && app.redirect_url === redirect_url && app.client_secret === client_secret) {
            if(req.session.state === state && req.session.code === code) {
                console.log('state and code');
                const token = rs.generate()
                database.tokens.push({
                    token,
                    client_id,
                    user_id
                })
                req.session.destroy(function(err) {
                    console.log(err);
                })
                return res.send(token);
            }
        }
    }
    req.session.destroy(function(err) {
        console.log(err);
    })
    return res.status(401).send({error: 'invalid request'});
});

module.exports = router;