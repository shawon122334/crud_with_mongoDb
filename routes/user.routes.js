const userRouter = require('express').Router()
const {createNewUser} = require('../controllers/user.controller')

userRouter.route('/register')
    .post(createNewUser)

module.exports = userRouter;

 