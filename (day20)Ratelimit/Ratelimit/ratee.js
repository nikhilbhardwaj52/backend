
 const redisClient=require('../config/redis')


 const windowsize=3600;
 const maxrequest=60;

 const ratelimiter=async(req,res,next)=>{
    try{
        const key =req.ip;
        const current_time=Date.now()/1000;
        
    }
 }