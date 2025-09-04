const bcrypt=require("bcrypt")

const password="rohit@123"

async function hasing(){
//const hashpass=await bcrypt.hash(password,16);//10 2 power 10 baar run krna
const salt=await bcrypt.genSalt(10);
const hashpass=await bcrypt.hash(password,salt);
console.log(salt);
console.log(hashpass);
}

module.exports=hasing;


//31 takes to generate 3-4 days