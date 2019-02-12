const rs = require('randomstring');
const database = require('./database');

function login(username, password) {
    for(let user of database.users) {
        if(user.username === username && user.password === password) {
            return user.user_id;
        }
    }
    return false;
}

module.exports = {
    login,
}