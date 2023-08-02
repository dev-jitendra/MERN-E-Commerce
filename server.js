import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

//configure env
dotenv.config();

// rest object 
const app = express();

//rest api
app.get('/',(req,res)=>{
    res.send("<h2>Welcome to ecommerce app</h2>");
});

//PORT
const PORT = process.env.PORT || 3000;

//run listen
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} node on part  ${PORT}`.green);
})