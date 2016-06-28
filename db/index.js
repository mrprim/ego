var mongoose = require('mongoose');
var users = require('./users.js');

function connect() {
    return new Promise(function (resolve, reject) {
        var db = mongoose.connection;
        db.on('error', reject);
        db.once('open', resolve);
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ego');
    });
}

module.exports = {
    connect: connect,
    users: users
};