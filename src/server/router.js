import express from 'express';
import User from './models/user'
import Post from './models/post'
import Comment from './models/comment'
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/reagram')

const router = express.Router();

router.post('/users/new', (req, res) => {
  let user = new User({
    nickname: req.body.nickName,
    password: req.body.password,
    posts: []
  })
  res.JSON({ status: 'Ok' });
});

router.post('/posts/new', (req, res) => {
  let post = new Post({
    userId: req.body.user.id,
    likes: [],
    comments: [],
    info: req.body.post.info,
    createdAt: new Date.now()
  })
  user = 
  res.json({ status: 'Ok' })
})

export default router;
