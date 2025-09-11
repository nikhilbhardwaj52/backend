const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/users");
const userAuth = require("../middleware/userAuth");
const redisClient = require("../config/redis");

// /auth/register

authRouter.post("/register", async (req,res)=>{

    try{

        // Validate kya uske andar firstName
        validUser(req.body);
        
        //  converting password into hashing
       req.body.password = await bcrypt.hash(req.body.password,10);

        await User.create(req.body);
        res.send("User Registered Successfully");
    }
    catch(err){
        res.send("Error "+ err.message);
    }
})



authRouter.post("/login", async(req,res)=>{

    try{

        // validate karna
        
        const people = await User.findOne({emailId:req.body.emailId});
        
        // if(!(req.body.emailId===people.emailId))
        //     throw new Error("Invalid credentials");

        const IsAllowed = people.verifyPassword(req.body.password);

        if(!IsAllowed)
            throw new Error("Invalid credentials");
        

        // jwt token 

        const token = people.getJWT();

        res.cookie("token",token);
        res.send("Login Successfully");
    }
    catch(err){
        res.send("Error: "+err.message);
    }
})


// /auth/logout

authRouter.post("/logout",userAuth,async(req,res)=>{
    try{
       
        const {token}=req.cookies;
        const payload=jwt.decode(token);

        await redisClient.set(`token:${token}`,"Blocked")
        await redisClient.expireAt(`token:${token}`,payload.exp)
        
       
         res.cookie("token",null,{expires:new Date(Date.now())})//invalid token send
         res.send("logout")  

    }
    catch(err){
         
        res.send(err.message);
    }

})

module.exports = authRouter