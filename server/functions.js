const rs = require('randomstring');

function returnRandomString() {
    return rs.generate();
}

module.exports = {
    returnRandomString,
}