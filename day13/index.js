const express =require("express")

const User = require("./modules/User")

const validate=require("./validateuser/validaate.js")

const validator=require("validator")

const app= express();

const bcrypt= require("bcrypt")

const main=require("./data.js")




app.use(express.json());//parsing


app.post("/register",async(req,res)=>{
    try{

             validate(req.body);
           
            //converting pass into hasin
            req.body.password=await bcrypt.hash(req.body.password,10);

            await User.create(req.body);
            res.send("update sucessfully")

    }
    catch(err){
     
          res.send("err"+err.message);
    }
})

app.get("/register",async(req,res)=>{
    try{
  
      const user= await User.find({});
        res.send(user);
    }
    catch(err){
        res.send(err);
    }
})

 app.get("/user/:id",async(req,res)=>{

    try{
   const re= await User.findById(req.params.id);
   res.send(re);
    }
    catch(err)
    {
      res.send(err);
    }

 })

 app.put("/user",async(req,res)=>{
    try{
        const {id,...update}=req.body;
        await User.findByIdAndUpdate(id,update,{runValidators:true});
        res.send("update Sucessfully");

    }
    catch(err)
    {
        res.send(err+message);
    }
 })

 app.delete("/USERS/:id",async (req,res)=>{
        
        const rat=req.params.id;

        await User.findByIdAndDelete(rat);

        res.send("delete")
       
 })

 app.post("/login",async (req,res)=>{
    try{
        //validate karna
        
          
       const people=await User.findById(req.body.id);
       if(!req.body.email===people.email)
       {
        throw new Error("invalid creds")
       }

      const is=  bcrypt.compare(req.body.passwor,people.password)
         if(!is)
         {
            throw new Error("new valid pass")
         }
         res.send("login successfully")
    }
    catch(err)
    {
        res.send(err.message);

    }
 })

main()
.then(()=>{console.log("connect to database")
    app.listen(7000,()=>{
    console.log("listen at 5000")
})
})
.catch((err)=>console.log(err));

