const userRouter = require('express').Router()
const {createNewUser,logInUser} = require('../controllers/user.controller')

userRouter.route('/register')
    .post(createNewUser)

userRouter.route('/login')
    .post(logInUser)

module.exports = userRouter;

 