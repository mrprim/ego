var mongoose    =   require("mongoose");

mongoose.connect('mongodb://localhost:27017/ego');
var mongoSchema =   mongoose.Schema;
var userSchema  = {
	"username" : String,
    "email" : String,
    "password" : String
};
// create model if not exists.
module.exports = mongoose.model('users',userSchema);
