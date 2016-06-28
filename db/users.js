var mongoose = require('mongoose');
var cleanFindModifier = '-_id id';

var userSchema = mongoose.Schema({
    "username": {type: String, index: {unique: true}},
    "email" : String,
    "password" : String
}, {
    "timestamps": true
});

var userModel = mongoose.model('users', userSchema);

module.exports = userModel;