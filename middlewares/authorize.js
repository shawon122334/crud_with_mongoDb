// we are going to check if user is part of our system

const jwt = require('jsonwebtoken')
// this function authorizes 
module.exports = function(req,res,next){
    //get request header first, because token is there.
    // It is front end developer's responsibility to pass token in header 
    // token format(key value pair) : "Authorization": "Bearer <token>" 
    // how does front end know how are we accepting token? follow documentation

    let token = req.header('Authorization');
    if(!token) return res.status(401).send('Access denied.No token provided')
    token = token.split(" ")[1].trim() // getting <token>

    // now we verify token 
    try{
        const verified_token_decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        // console.log(verified_token_decoded) //f we can see which users token is this 
        req.user = verified_token_decoded; // we created user in req obj, and stored all users who accessed the data (where this middleware is used )
        next(); // control passes to next one
    }
    catch(err){
        return res.status(400).send('Invalid Token')
    }

}

// now lets send a request and see if its working.lets say, user can see teachers data without authorization but if user creates a teacher , authorization requires 
// we import this middleware in student router 


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjg5MzEwZWQ0ZWI3MDJlYTI2MTUxYTYiLCJlbWFpbCI6InNoYXdvbkB5YWhvby5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY1MzE1ODE1OH0.H35sTdZyGAkA0oV2fpoz81wfj2FuKExsZDqmwKJqV54