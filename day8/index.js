
const express=require("express")
const app=express();

const bookstore=[
    {1:"gmidsij"},
    {2:"fndngd"},
    {3:"kgdlsf"}
]

app.use(express.json())

app.get("/user",(req,res)=>{
    res.send(bookstore);
})


app.post("/user",(req,res)=>{
    bookstore.push(req.body)
    res.send("added")
})

app.listen(6000,()=>{
    console.log("7000")
})