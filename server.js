import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRouts.js'

//configure env
dotenv.config();

//databse config
connectDB();

// rest object 
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);


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