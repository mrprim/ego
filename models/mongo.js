var mongoose    =   require("mongoose");

mongoose.connect('mongodb://localhost:27017/demoDb');
var mongoSchema =   mongoose.Schema;
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
// create model if not exists.
module.exports = mongoose.model('userLogin',userSchema);
