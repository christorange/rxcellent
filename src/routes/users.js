var express = require('express');
var router = express.Router();
const { User } = require('../model/User')

// register
router.post('/register', async (req, res, next) => {
  const user = await User.create({
    username: req.body.username,
    password: req.body.password
 }) 
 res.send(user)
});

// get user info
router.get('/info', async (req, res, next) => {
  const user = await User.findOne({
    _id: req.user_id  })
  res.send({
    code: 200,
    data: user
  })
})

// get user table
router.get('/list', async(req, res, next)=>{
  const user = await User.find()
  res.send({ 
    code: 200,
    msg: 'success',
    data: user
  })
})

module.exports = router;