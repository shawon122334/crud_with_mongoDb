const teacherRouter = require('express').Router()

const {createTeacher,getTeacher,getSingleTeacher,updateTeacher,deleteTeacher} = require('../controllers/teacher.controllers')
const authorize = require('../middlewares/authorize')

teacherRouter.route('/')
    .post([authorize],createTeacher)  // array is not mandatory 
    .get(getTeacher)

teacherRouter.route('/:id')
    .get(getSingleTeacher)
    .patch([authorize],updateTeacher)
    .delete([authorize],deleteTeacher)


module.exports = teacherRouter