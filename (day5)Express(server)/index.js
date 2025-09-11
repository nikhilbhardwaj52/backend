const express=require("express")
const app=express();

const bookstore=[
    {id:1,name:"harry",author:"dev"},
    {id:2,name:"nikhil",author:"nikhilf"},
    {id:4,name:"fkjg",author:"fmf"}
]

app.use(express.json());//parsing method (how by this method data is store in server)

app.get("/book",(req,res)=>{
    res.send(bookstore)
    console.log("hello")
})

app.get("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);//parse Int convert string to int
    const book=bookstore.find(info=>
        info.id==id)
        res.send(book)

    
})


//if we use app.use then it matches only book and give result

app.post("/book",(req,res)=>{
   bookstore.push(req.body);//to push data
   res.send("data sucessful in ");
})


app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const book=bookstore.findIndex(info=>
        info.id===id
    )
    bookstore.splice(book,1);
    res.send("delete");
})

app.listen(5000,()=>{
    console.log("listen at 5000")
})
