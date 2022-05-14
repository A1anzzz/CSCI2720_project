var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//log schema
const logSchema = Schema({
    userIP: { type: String, required: true},
    userBrowserInfo: {type: String, required: true},
    dateTime: {type: String, required: true},
    requestMethod: {type: String, required: true},
    url: {type: String, required: true}
});
const Log = mongoose.model('Log', logSchema);

module.exports = Log;