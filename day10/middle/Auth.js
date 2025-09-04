const Auth=(req,res,next)=>{
     const token="fsf"
                                         //it is middleware
    const access= token==="fsf"?1:0;

    next();
}

module.exports=Auth;