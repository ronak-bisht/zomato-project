const mongoose=require('mongoose')
const express=require('express')
const Router=express.Router()
const User=require('./userSchema.js')
const jwt=require('jsonwebtoken')

 Router.post('/register',(req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        res.status(422).send({message:'please fill all the fields'})
    }
    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            res.status(422).json({message:'user ALready exited'})
        }
        else{
            const user=new User({name,email,password})
            user.save().then(()=>{
                res.status(201).json({message:'sumbitted'})
            }).catch((err)=> res.status(500).json({error:'failed to registered'}))
        }
    }).catch(err=> console.log(err))


})

//login validation---------------------

Router.post('/signin',async (req,res)=>{
    try{
        const {email,password}=req.body
        if(!email || !password){
            return res.status(400).json({error:'plz fille the data'})
        }
        const userLogin= await User.findOne({email:email})
        console.log(userLogin.tokens)
        if(!userLogin){
            res.status(400).json({error:'not login'})
        }
        else{
            if(userLogin.password===password){ 
                const token=await userLogin.generateAuthToken()
                res.cookie('jwtoken',token,{
                    httpOnly:true
                })
                res.json({message:'user signed in succesfull'})
            }
            else{
                res.status(400).json({error:'invalid credentials'})
            }
            
        }
       

    }
    catch(err){
        console.log(err)
    }
})

module.exports=Router