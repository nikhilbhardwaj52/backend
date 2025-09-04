 
const { isUtf8 } = require("buffer")
const fs = require("fs")
 fs.readFile("./data.json",(err,res)=>{
    console.log(res)
 })