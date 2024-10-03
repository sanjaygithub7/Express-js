const express = require('express');
const router = express.Router();
const bodyparser=require('body-parser')

//using body parser for decode the request data

router.use(bodyparser.urlencoded())  

// Using (GET) to retrieve data (in this case, display the form to the user)

router.get('/addproduct', (req, res, next) => {
 res.send('<h1>Add product</h1><form action="http://localhost:3000/admin/storeproduct" method="POST"><input type="text" name="title"> <input type="submit" value="submit"></form>');
});

//Using (POST) to send data to the server (in this case, submit the form with the product title)

router.post('/storeproduct', (req, res, next) => {
    console.log('form data:',req.body);
    res.send('<h1 style="color:red">Product Submitted! </h1>');
});

module.exports=router;

