import userModel from '../models/userModel.js'


export const registerController = async (req,res) => {
    try{
        const {name, email, password, phone, address} = req.body;

        //validations
        if(!name){
            return res.send({error:'Name is Require'})
        };
        if(!email){
            return res.send({error:'email is Require'})
        };
        if(!password){
            return res.send({error:'password is Require'})
        };
        if(!phone){
            return res.send({error:'phone number is Require'})
        };
        if(!address){
            return res.send({error:'address is Require'})
        };

        //Check User
        const existingUser =  await userModel.findOne({email})
        //Check Existing User
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already Register please login'
            });
        };

        //register user
        const hashedPassword = await hashPassword(password);
        //save data
        const user = new userModel({ name, email, Phone, address, password:hashedPassword}).save();

        res.status(201).send({
            success:true,
            message:`user register successfully`,
            user
        })

    }catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:`error in registeration`,
            err
        })
    }
};


