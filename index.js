const express = require('express')
const app = express()
const mongoose = require('mongoose')

const teacherRouter = require('./routes/teacher.routes')

// database mongoDb connection
mongoose.connect('mongodb://localhost:27017/teacher')
    .then(()=> console.log('MongoDb connected'))
    .catch(err => console.error('database not connected'))

app.use(express.json())
app.use((req,res,next)=>{
    console.log('I am middleware');
    next()
})
// connecting router
app.use('/home',teacherRouter)

app.use((req,res)=>{
    return res.status(404).send('not found')
})
app.listen(3000,()=>{
    console.log('server is listening on 3000');
})
