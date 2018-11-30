const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
        nickname: String,
        password: String,
        posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
    })

    const User = mongoose.model('User', userSchema)

export default User