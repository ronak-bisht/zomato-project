const express=require('express')
const app=express();
const Router=require('./auth.js')
const mongoose=require('mongoose')
const DB="mongodb+srv://root:babyboss@cluster0.5mes4.mongodb.net/youtube?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log('connection Succesfull')
}).catch((err)=>{
    console.log(err)
})

app.use(express.json())
app.use(Router)



app.listen(3500)
