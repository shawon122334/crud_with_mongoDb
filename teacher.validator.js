const Joi = require('joi');

const teacherValidatorSchema = Joi.object({
    name : Joi.string
})