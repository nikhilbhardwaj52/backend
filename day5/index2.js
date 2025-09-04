
const express=require("express")

const app =express();

app.use(express.json());

app.post("/user",(req,res)=>{
   console.log(req.body)
    res.send("hello")
})

app.listen(4000,()=>{
    console.log("sifjfsc");
})