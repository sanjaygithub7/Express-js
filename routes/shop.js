//Separate code (Router) for displaying main page of shopping

const express=require('express')
const router=express.Router();
const path = require('path');  // this is used for adding file


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})


module.exports=router;
