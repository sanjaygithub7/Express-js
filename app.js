// Import the express module, which helps create a web server
const express = require('express');

// Create an instance of an Express app for specific use of needs
const app = express();

const path=require('path')

// example route for user
const userpage=require('./routes/shop')

const product=require('./routes/product')


// Serves static files (HTML, CSS, JS, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname,'public')))

app.use(product) 
app.use(userpage)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})



// Make the server listen for requests on port 3000
app.listen(3000);
