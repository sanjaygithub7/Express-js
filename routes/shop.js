//Separate code (Router) for displaying main page of shopping

const express=require('express')
const router=express.Router();
const path = require('path');  // this is used for adding file
const rootDir=require('../utils/path')


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
})


module.exports=router;
