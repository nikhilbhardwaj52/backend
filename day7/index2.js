const express=require("express")
const app=express();
  

//middleware in backend //middleware

app.use("/user",(req,res,next)=>{       
    console.log("hello ji first")
    next();
})

app.get("/user",(req,res)=>{
    
    console.log("second")             
    res.send("done")
})

app.post("/user",(req,res)=>{
    res.send("done")              
})








app.listen(6000,()=>{
    console.log("listen at 6000")
})