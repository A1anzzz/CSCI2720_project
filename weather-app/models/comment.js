//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//comment schema
const CommentSchema = Schema({
    location: { type: String, required: true },
    author: { type: String, required: true },
    text: { type: String, required: true},
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
