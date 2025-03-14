import { User } from "../schemas/blog.Schema.js"
import bcrypt from 'bcryptjs'

export const register = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }

        const existingUser = await User.findOne({email});

        if(existingUser) return res.status(400).json({ message: "User already exists!" })

       
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User({name,email,password:hashedPassword})
        await newUser.save()
        return res.status(201).json({message:"User Created Successfully"})
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const login = (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}