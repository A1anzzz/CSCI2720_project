var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user schema
const userSchema = Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: String, required: true },
    favLoc: {type: [String]},
    theme: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

module.exports = User;

