    const express=require("express")




    const app=express();





    const bookstore=[
    {id:1,name:"harry",author:"dev"},
    {id:2,name:"nikhil",author:"nikhilf"},
    {id:4,name:"fkjg",author:"fmf"}
    ]



    app.use(express.json());//parsing method (how by this method data is store in server)

    app.get("/book",(req,res)=>{
    const book=bookstore.find(info=>info.name===req.query.name)
    res.send(book)
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




    app.patch("/book",(req,res)=>{
    const book= bookstore.find(info=>
        info.id==req.body.id
    )
    book.author=req.body.author;
    res.send("fmdf");
    })




    app.put("/book",(req,res)=>{
    const book=bookstore.find(info=>
        info.id==req.body.id
    )
    book.author=req.body.author;
    book.name=req.body.name;
    })




    app.delete("/book/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=bookstore.findIndex(info=>info.id===id)
    bookstore.splice(index,1);
    res.send("delete")
    })

    




    app.listen(6000,()=>{
    console.log("listen at 6000")
    })
