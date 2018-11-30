const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reagramm');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
    
const commentSchema = new mongoose.Schema({
    text: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: Date
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment