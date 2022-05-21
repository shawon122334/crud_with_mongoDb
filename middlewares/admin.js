module.exports = function (req,res,next){
    // this function will execute after authorization. 
    // in authorization user must be created 
    if(req.user.role !== 'admin') return res.status(401).send('Forbidden')
    next()
}