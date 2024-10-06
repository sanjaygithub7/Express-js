// Import the express module, which helps create a web server
const express = require('express');

// Create an instance of an Express app for specific use of needs
const app = express();

// example route for user
const userpage=require('./routes/shop')

const product=require('./routes/product')

app.use(product)
app.use(userpage)

app.use((req,res,next)=>{
    res.send('<h1>404 page not found</h1>');
})



// Make the server listen for requests on port 3000
app.listen(3000);
