const bcrypt = require('bcrypt') // we use bcrypt to hash password
const {User} = require('../models/user.model')

const createNewUser = async(req,res)=>{
    let user = await User.findOne({email:req.body.email})
    if(user) res.status(400).send('User already registered!')
    
    // we use JOI to validate easily
    //validation must be done before creating new user
    user = new User({
        userName : req.body.userName,
        email: req.body.email,
        password : req.body.password
    })
    
    // salt to create string 
    const salt = await bcrypt.genSalt(10); // returns promise, it is async function so we use await 
    user.password = await bcrypt.hash(user.password,salt);

    // now we store our user to db
    try{
        const result = await user.save()
        return res.send({
            data : {
                userName : result.userName,
                email : result.email 
            }
        })
    }
    catch(err){
        // mongoose error in array format
        const errMsgs = [];
        for(field in err.errors){
            errMsgs.push(err.errors[field].message);
        }
        return res.status(400).send(errMsgs);
    }

}
module.exports = {
    createNewUser
}