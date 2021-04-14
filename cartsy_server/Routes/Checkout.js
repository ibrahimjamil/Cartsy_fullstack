const express=require('express')
const router=express.Router()
const JWT=require('jsonwebtoken')

const verifyLogin=async (req,res,next)=> {
    console.log(req.body.token1)
    let result=await JWT.verify(req.body.token1,"SECRET_KEY")
    req.result=result
    next()
}

router.post('/',verifyLogin,async (req,res)=>{
     console.log(req.result)
     res.send()
})


module.exports=router