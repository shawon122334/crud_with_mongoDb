// we are going to check if user is part of our system
module.exports = function(req,res,next){
    //get request header first, because token is there.
    // It is front end developer's responsibility to pass token in header 
    // token format(key value pair) : "Authorization": "Bearer <token>" 
    // how does front end know how are we accepting token? follow documentation

    let token = req.header('Authorization');
    if(!token) return res.status(401).send('Access denied.No token provided')
    token = token.split(" ")[1].trim() // getting <token>

}

// now lets send a request and see if its working.lets say, user can see teachers data without authorization but if user creates a teacher , authorization requires 
// we import this middleware in student router 