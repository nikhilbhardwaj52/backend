const express=require("express")
const app=express();




app.use(express.json());


app.get("/info",(req,res)=>{



})

app.post("/register",async(req,res)=>{
    
    try{
    req.body.password=await bcrypt.hash(req.body.password,10);
    await User.create(req.body);
    res.send("register successful")
    }
    catch(err)
    {
        res.send(err.message);
    }

})

app.post("/login",async(req,res)=>{
try{
   const people=await User.findOne({email:req.body.email})
   const isallow=await bcrypt.compare(req.body.password,people.password);
   if(!isallow)
   {
     throw new Error("invalid password")
   }
   const token=Jwt.sign({_id:people._id,email:people.email},"nikhilbhardwaj")
   res.cookie("token",token)
   res.send("login sucessfully")
}
catch(err)
{
    res.send(err.message);
}

})

app.patch("/patch",(req,res)=>{

})

app.listen(3000,()=>{
    console.log("running at 3000")
})