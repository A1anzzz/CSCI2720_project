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