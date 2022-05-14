//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//log schema
const logSchema = Schema({
    userIP: { type: String, required: true },
    userBrowserInfo: { type: String, required: true },
    dateTime: { type: String, required: true },
    requestMethod: { type: String, required: true },
    url: { type: String, required: true }
});
const Log = mongoose.model('Log', logSchema);

module.exports = Log;
