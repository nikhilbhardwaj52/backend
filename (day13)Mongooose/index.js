const express=require("express")
const app=express();
const main=require("./database")
const User=require("./utlis/user")
const validate=require("./utlis/user")
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const Auth=require("./middleware/Auth")



app.use(express.json())
app.use(cookieParser())


app.post("/login",async(req,res)=>{
    try{
       const people= await User.findOne({email:req.body.email})
        const IsAllowed=await bcrypt.compare(req.body.password,people.password)
        if(!IsAllowed)
        {
            throw new Error("invalid password")
        }

        const token=jwt.sign({_id:people._id,email:people.email},"nikhil@12345")
        res.cookie("token",token)
        res.send("login successfully")

         

       }
     catch(err)
    {
         res.send(err);
    }
})

app.post("/register",async(req,res)=>{
    try{
          validate(req.body);

          req.body.password=await bcrypt.hash(req.body.password,10);

          await User.create(req.body);
          res.send("sucessfully ")
    }
    catch(err)
    {
        res.send(err.message);
    }
})

app.get("/info",Auth,async(req,res)=>{
    try{
        
        res.send(req.result)
    }
    catch(err)
    { 
      res.send(err.message);
    }
})

app.delete("/delete",Auth,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.send("delete sucessfully")
    }
    catch(err)
    {

    }
})

app.patch("/user",Auth,async(req,res)=>{
    try{
        const {_id, ...update}=req.body;
        await User.findByIdAndUpdate(_id,update,{"runvalidators":true})
        req.send("update sucessfully")
    }
    catch(err)
    {
       res.send(err.message)
    }
})



main()
.then(
    ()=>{
    console.log("connect to db")
    app.listen(4000,()=>{
    console.log("listen at 3000")
    })
    
})
.catch((err)=>console.log(err));
