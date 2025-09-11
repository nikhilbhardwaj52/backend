const express =require("express")

const User = require("./modules/Users")



const app= express();


const main=require("./Database")




app.use(express.json());//parsing


app.get("/info",async(req,res)=>{  //get opertion


    console.log("hello ji")
    
    const ans=await User.find({});
    res.send(ans);

})

app.post("/info",async(req,res)=>{   //to post data

   // const ans=new User(req.body);
    //await ans.save();
     try{  

        
     await User.create(req.body); 
     console.log("done");
     }
     catch{
        res.send(err);
     }
})

app.delete("/info",async(req,res)=>{    //delete

      await User.deleteOne({name:"nikhil"})
       console.log("delete")
      } 
    )
app.put("/info",async(req,res)=>{

    const ress= await User.updateOne({name:"Rohit"} ,{age:12});
})


main()
.then(()=>{console.log("connect to database")
    app.listen(4000,()=>{
    console.log("listen at 4000")
})
})
.catch((err)=>console.log(err));

