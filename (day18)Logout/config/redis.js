
const redis=require('redis')
const redisClient=redis.createClient(
    {
        username: 'default',
        password: 'P6oGbHmL4Xr5t2Tc40QxfIjoPBLaFEwL',
        socket: {
        host: 'redis-10845.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10845
                }
    })

module.exports=redisClient;
