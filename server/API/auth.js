const express = require('express');
const router = express.Router();
const functions = require('../functions');
const database = require('../database');
const rs = require('randomstring');

function login(username, password) {
    for(let user of database.users) {
        if(user.username === username && user.password === password) {
            return user.id;
        }
    }
    return false;
}

router.get('/account', function(req, res, next) {
    const query = req.query;
    const username = query.username;
    const password = query.password;
    const auth = rs.generate();

    let id = login(username, password);
    let sendData = {
        id: '',
        error: '',
    }
    if(id) {
        sendData.id = id;
        return res.send(sendData);
    }
    sendData.error = 'Authorization failed. There\'s no account matched with that Username and Password';
    return res.send(sendData);
});

router.get('/app', function(req, res, next) {
    const query = req.query;
    const id = query.id;
    const client_id = query.client_id;
    const redirect_url = query.redirect_url;
    const scope = query.scope;
    const auth = rs.generate();

    for(let i in database.apps) {
        const app = database.apps[i];
        if(app.client_id === client_id && app.redirect_url === redirect_url) {
            database.apps[i].user.push({
                id,
                scope,
                auth,
            })
        }
        return res.redirect(`${redirect_url}?auth=${auth}`);
    }
    return res.send('Authorization failed. Please, check the app you try to authorize is really safe.');
})

module.exports = router;