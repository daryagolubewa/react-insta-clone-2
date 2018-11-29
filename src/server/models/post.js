const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reagramm');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    info: String,
    createdAt: Date
})

const Post = mongoose.model('Post', postSchema)

export default Post