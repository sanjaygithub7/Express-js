// Page for viewing add product using router

const express = require('express');
const router = express.Router();
const bodyparser=require('body-parser')
const path=require('path')

const rootDir=require('../utils/path')

//using body parser for decode the request data

router.use(bodyparser.urlencoded())  

// Using (GET) to retrieve data (in this case, display the form to the user)

router.get('/addproduct', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'))
});

//Using (POST) to send data to the server (in this case, submit the form with the product title)

router.post('/storeproduct', (req, res, next) => {
    console.log('form data:',req.body); // to print the data in the form from the server
    res.send(`
        <html>
            <head>
                <style>
                    h1 {
                        color: #11d144;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 50px;
                    }
                </style>
            </head>
            <body>
                <h1>Product Submitted!</h1>
            </body>
        </html>
    `);
    
});

module.exports=router;

