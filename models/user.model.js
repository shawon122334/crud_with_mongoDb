const jwt = require('jsonwebtoken')
const {Schema,model} = require('mongoose')

const userSchema = Schema ({ 
    userName : {
        type : String, 
        required : true, 
        minLength :5,
        maxLength :100,
    
    },
    email : {
        type : String,
        required: true,
        minLength :8,
        maxLength: 255,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : 6,
        maxLength: 1024
    }
})
// mongoose schema method
// we can generate token in model
// whenever new user or object is created , token generates 
// create token
userSchema.methods.generateJWT = function(){
    const token = jwt.sign({_id: this._id,email: this.email},process.env.JWT_SECRET_KEY);
    return token;
}
// now if we use this jwt token in user, it takes users id and email and create a token

const User = model('User',userSchema)
module.exports.User = User