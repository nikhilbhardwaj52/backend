const validaate=require("validator")

function validUser(data){

    const mandatoryField = ["firstName","emailId","age","password"]


   const IsAllowed= mandatoryField.every((k)=>Object.keys(data).includes(k));
        
   if(!IsAllowed)
   {
    throw new Error("filed Missing");

   }
   if(!validaate.isEmail(data.email))
      throw new Error("filed Missing");

   if(!validaate.isStrongPassword(data.password))
      throw new Error("filed Missing");


}

module.exports=validUser;