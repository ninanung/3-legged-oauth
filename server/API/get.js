const express = require('express');
const router = express.Router();
const functions = require('../functions');
const database = require('../database');

router.get('/username', function(req, res, next) {
    const request_token = req.get('Authorization').split(' ')[1]
    let client_id = '';
    let user_id = '';
    let scope = '';
    for(let token of database.tokens) {
        if(request_token === token.token) {
            client_id = token.client_id;
        }
    }
    if(!client_id) {
        return res.status(401).send({error: 'invalid session or token'});
    }
    for(let app of database.apps) {
        if(app.client_id === client_id) {
            for(let user of app.registered_user_ids) {
                if(user.user_id === user_id) {
                    scope === user.scope;
                }
            }
        }
    }
    if(!user_id || !scope) {
        return res.status(401).send({error: 'invalid session or token'});
    }
    if(scope !== 'username') {
        return res.status(401).send({error: 'this token don\'t have permission to get data'});
    }
    for(let user of database.users) {
        if(user.user_id === user_id) {
            return res.status(200).send({username: user.username});
        }
    }
});

router.get('email', function(req, res, next) {
    const request_token = req.get('Authorization').split(' ')[1]
    let client_id = '';
    let user_id = '';
    let scope = '';
    for(let token of database.tokens) {
        if(request_token === token.token) {
            client_id = token.client_id;
        }
    }
    if(!client_id) {
        return res.status(401).send({error: 'invalid session or token'});
    }
    for(let app of database.apps) {
        if(app.client_id === client_id) {
            for(let user of app.registered_user_ids) {
                if(user.user_id === user_id) {
                    scope === user.scope;
                }
            }
        }
    }
    if(!user_id || !scope) {
        return res.status(401).send({error: 'invalid session or token'});
    }
    if(scope !== 'email') {
        return res.status(401).send({error: 'this token don\'t have permission to get data'});
    }
    for(let user of database.users) {
        if(user.user_id === user_id) {
            return res.status(200).send({email: user.email});
        }
    }
});

module.exports = router;