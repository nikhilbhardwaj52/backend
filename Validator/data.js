
 const mongoose= require('mongoose');


 async function main()
 {
    await mongoose.connect("mongodb+srv://LivingZen:Srmcse%40456@livingzen.ckdqufw.mongodb.net/instagram");
 }


 module.exports=main;