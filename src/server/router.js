import express from 'express';

const router = express.Router();




router.post('/addUser', (req, res) => {
  let users = [
    { 
      nickName: '1', 
      password: '1' 
    }
  ]
  for (let i = 0; i < users.length; i++){
    if(users[i].nickName === req.body.nickName){
      return res.send(400, 'This nick is already used')
    }
  }
  users.push({
    nickName: req.body.nickName,
    password: req.body.password
  })
  return res.send(200, "Ok");
});

router.post('/users', (req, res) => {
  let users = [
    { 
      nickName: '1', 
      password: '1' 
    }
  ]
  for (let i = 0; i < users.length; i++){
    if(users[i].nickName === req.body.nickName && users[i].password === req.body.password){
      return res.send(200, "Ok");
    }
  }
  return res.send(400, "Ok");
});

export default router;
