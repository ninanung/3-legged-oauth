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