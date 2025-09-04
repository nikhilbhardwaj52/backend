const mongoose=require('mongoose');
const {Schema}  =mongoose;


  const userschema=new Schema({
       firstName:{
        type:String,
        required:true,

        minlength:4,
        maxlength:10
       },
       LastName:{
          type:String
       },
       age:{
        type:Number,
        min:14,
        max:19,
        required:true
       },
       photo:{
             type:String,
             dafault:String
       },
       gender:{
          type:String,
          required:true,
          validate(value)
          {
              if(!["male","female","others"].includes(value))
              throw new Error("invalid gender") 
          }
       },
       email:{
          type:String,
          unique:true,
          trim:true,
          lowercase:true,
          immutable:true
       },
       password:{
         type:String

       }

     },{timestamps:true});

     const User=mongoose.model("User",userschema);

     module.exports=User;