const express=require('express')
const router=express.Router()
const UserModel=require('../model/User')
const Bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')

router.post('/register',async(req,res)=>{
    //bycrypt hash the password and store it in database
    let Gpassword= await Bcrypt.hash(req.body.Password,10)
    await UserModel.create({
        Email: req.body.Email,
        Password: Gpassword
    })
    res.send(JSON.stringify("dataCreated"))
})

router.post('/login',async(req,res)=>{
    let data =await UserModel.findOne({ 
        where:{
            Email:req.body.Email
        }
    })
    // comapre returns true if password matched with login password
    let result = await Bcrypt.compare(req.body.Password, data.Password)
    if (result===true){
        let token = await JWT.sign({Email:data.Email,password:data.Password},"SECRET_KEY")
        res.send(JSON.stringify(token));
    }else{
        res.send()                              
    }
})

router.get('/',async(req,res)=>{
    let data=await UserModel.findAll()
    res.send(JSON.stringify(data))
})
router.delete('/delete',async(req,res)=>{
    await UserModel.destroy({
        where:{}
    })
    res.send()
})


module.exports=router