const express = require('express');
const router = express.Router();
const functions = require('../functions');
const database = require('../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const rs = require('randomstring');

router.post('/app', jsonParser, function(req, res, next) {
    const appname = req.body.appname;
    const redirect_url = req.body.redirect_url;
    const user_id = req.body.user_id;
    if(!appname || !redirect_url || !user_id) {
        res.status(400).send('missing datas');
    }
    const app = {
        appname,
        user_id,
        client_id: rs.generate(),
        client_secret: rs.generate(),
        redirect_url,
        registered_user_ids: [],
    }
    database.apps.push(app);
    res.send(database.apps);
});

router.get('/get/app', function(req, res, next) {
    res.status(200).send(database.apps.slice());
});

router.post('/login', jsonParser, function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const user_id = functions.login(username, password);
    if(user_id) {
        res.send(user_id);
    } else {
        res.status(404).send('invalid username of password.');
    }
});

module.exports = router;