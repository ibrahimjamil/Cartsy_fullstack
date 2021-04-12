//dependencies
const express=require('express')
const router=express.Router()
const Data=require('../Data/Data.json')
const Productmodel= require('../Pmodel/Product')

// get routes for /products/      onward
router.get('/',async(req,res)=>{
    try{
        const data=await Productmodel.findAll()
        res.json(data)
    }catch(err){
        res.json({message:err})
    }
})

//middleware
let checkData=(req,res,next)=>{
    console.log("data cleared")
    next()
}
//delete all data
router.delete('/',async (req,res)=>{
    await Productmodel.destroy({
        where: {},
      })
    res.end()
})

// post routes for /products/      onward
router.post('/',checkData, async (req,res)=>{
    const  P= await Productmodel.bulkCreate(Data)
    console.log(JSON.stringify(P))
    res.end()
})

module.exports=router