const teacherRouter = require('express').Router()

const {createTeacher,getTeacher,getSingleTeacher,updateTeacher,deleteTeacher} = require('../controllers/teacher.controllers')
const authorize = require('../middlewares/authorize')
const admin = require('../middlewares/admin')

teacherRouter.route('/')
    .post([authorize],createTeacher)  // array is not mandatory, we can pass multiple middleware
    .get(getTeacher)

teacherRouter.route('/:id')
    .get(getSingleTeacher)
    .patch([authorize],updateTeacher)
    .delete([authorize,admin],deleteTeacher)


module.exports = teacherRouter