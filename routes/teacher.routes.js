const teacherRouter = require('express').Router()

const {createTeacher,getTeacher,getSingleTeacher,updateTeacher,deleteTeacher} = require('../controllers/teacher.controllers')

teacherRouter.route('/')
    .post(createTeacher)
    .get(getTeacher)

teacherRouter.route('/:id')
    .get(getSingleTeacher)
    .patch(updateTeacher)
    .delete(deleteTeacher)


module.exports = teacherRouter