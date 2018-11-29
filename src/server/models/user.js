const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reagramm');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

    const userSchema = new mongoose.Schema({
        nickname: String,
        password: String,
        posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
    })

    const User = mongoose.model('User', userSchema)

export default User