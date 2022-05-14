//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

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

