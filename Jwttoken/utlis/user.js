const mongoose=require("mongoose");
const {Schema}=mongoose;

const userschema=new Schema({
    firstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String
    },
    age:{
        type:Number,
        min:13,
        max:17,
        required:true
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
        immutable:true,
        lowercase:true
     }
     ,
     password:{
        type:String
     }
},{timestamps:true})

userschema.methods.Functionname=

 User=mongoose.model("User",userschema);//it create a object


module.exports=User;