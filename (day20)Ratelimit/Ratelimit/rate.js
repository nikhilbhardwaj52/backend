
const redisClient = require("./config/redis");

const ratelimiter=async(req,res,next)=>{
     
             
    try{

        const ip=req.ip;
        const count=await redisClient.incr(ip);

        if(count>60)
        {
            throw new Error("user limit exceed");
        }
        
        if(count==1)
        {
            await redisClient.expire(3600);
        }
        next();
    }
    catch(err)
    {
        res.send(err);
    }

}
module.exports=ratelimiter;