const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users")
const validUser = require("./utils/validateuser")
const bcrypt = require("bcryptjs");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const userAuth = require("./middleware/userAuth");
require('dotenv').config()
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const commentRouter = require("./routes/comment")
const redisClient=require("./config/redis")




app.use(express.json());
app.use(cookieParser())


app.use("/auth",authRouter);
app.use("/user",userRouter);
app.use("/comment", commentRouter);


const initilize=async()=>{
    try{
        
        await redisClient.connect();
        console.log("connected to redis")
        
        await main();
        console.log("connect to db");

        aap.listen(process.env.PORT,()=>{
            console.log("listen at port 3000")
        })
    }
    catch(err)
    {
        console.log("error"+err);
    }

}
initilize();





