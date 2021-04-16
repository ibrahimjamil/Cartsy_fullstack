const multer=require('multer')
const express=require('express')
const router=express.Router()
const shortid=require('shortid')

const uploadFile = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,shortid.generate()+".jpeg")
    }
})

//multer middleware
const upload=multer({storage:uploadFile})

router.post("/single",upload.single('image'),(req,res)=>{
    console.log(req.file.filename)
    res.send("single file uploaded successful")
})



module.exports=router