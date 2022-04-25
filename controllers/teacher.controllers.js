const {Teacher} = require('../models/teacher.models')

const createTeacher = async (req,res)=>{
    const newTeacher = new Teacher (req.body)
    try{
        const result = await newTeacher.save()
        return res.status(201).send(result)
    }
    catch(err){
        return res.status(500).send({
            error : err
        })
    }


}
const getTeacher = async (req, res)=>{
    try{
    const teachers = await Teacher.find()
    return res.status(200).send(teachers)
   } 
   catch(err){
       return res.status(500).send({
           error : err
       })
   }
}
const getSingleTeacher = async (req, res)=>{
    const id = req.params.id
    try{
        const teacher = await Teacher.findById(id)
        return res.status(200).send(teacher)
    }
    catch(err){
        return res.status(500).send({
            error : err
        })
    }
}
const updateTeacher = async (req, res)=>{
    const id = req.params.id 
    // const updatedData = req.body
    try{
        const teacher = await Teacher.findByIdAndUpdate(id,req.body,{new : true, useFindAndModify : false})
        return res.status(200).send(teacher)
    }
    catch(err){
        return res.status(500).send({
            error : err
        })
    }
}
const deleteTeacher = async (req, res) => {
    const id = req.params.id 
    try{
        const teacher = await Teacher.findByIdAndDelete(id) 
        return res.status(200).send('deleted successfully ')
    }
    catch(err){
        return res.status(500).send({
            error : err
        })
    }
}
module.exports = {
    createTeacher,
    getTeacher,
    getSingleTeacher,
    updateTeacher,
    deleteTeacher
}