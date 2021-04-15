const multer=require('multer')
const express=require('express')
const router=express.Router()


const uploadFile = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../images')
    },
    filename:(req,res,cb)=>{
        cb(null,Date.now()+"--"+file.originalname)
    }
})

const upload=multer({storage:uploadFile})

router.post("/single",upload.single('image'),(req,res)=>{
    console.log(req)
    res.send("single file uploaded successful")
})



module.exports=router