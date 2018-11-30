import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
  let users = [
    { 
      nickName: '1', 
      password: '1' 
    }
  ]
  for (let i = 0; i < users.length; i++){
    if(users[i].nickName === req.body.nickName){
      res.send(400, 'This nick is already used')
    }
  }
  users.push({
    nickName: req.body.nickName,
    password: req.body.passowrd
  })
  res.send(200, "Ok");
});

export default router;
