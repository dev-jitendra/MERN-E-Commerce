import mongoose from 'mongoose';

const connectDB = async () =>{
    try{
        const conn= await mongoose.connect(process.env.MONGODB_URL);
        console.log(`connected to mongodb databases ${conn.connection.host}`.green)
    }catch(err){
        console.log(`Error in Mongodb connection ${err}`.red);
    }
}

export default connectDB;