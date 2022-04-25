const {Schema,model} =require('mongoose')

const teacherModels = Schema ({
    name : {type : String, required: true},
    dob : {type : Date},
    subject : {type : String, required: true}
});

const Teacher = model ('Teacher',teacherModels)
module.exports.Teacher = Teacher 