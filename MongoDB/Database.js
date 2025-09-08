



const mongoose=require('mongoose');


async function main()
{
    await mongoose.connect("mongodb+srv://LivingZen:Srmcse%40456@livingzen.ckdqufw.mongodb.net/")
  
     //const userschema=new Schema({
       // name:String,
       // age:Number,
       // city:String,
       // gender:String
    // });


     //model ko create :collection create kena(apni class create kena )

    //we create class 

     //document create karo:collection create karna or we can say object 

    // const user1=new User({name:"Rohit",age:20,city:"Dwarka",gender:"male"});
     //await user1.save();

     //await User.create({name:"mohna",city:"pakistan",gender:"Male"});

     //await User.insertMany([{name:"nikhil",age:18},{age:25,gender:"male"}])


     //find document

    // const ans=await User.find({});
   
     //console.log(ans);

     //particlar document
    
    // const ans2= await User.find({name:"Rohit"})
     
     // console.log(ans2);



    



}


main()
.then(()=>console.log("connect to database"))
.catch((err)=>console.log(err));


 module.exports=main;