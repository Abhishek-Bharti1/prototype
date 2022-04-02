const express = require('express')
const users = require("./data.json")
const app = express()
// app.use(logger)
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/u",(req,res)=>{
    console.log('he');
    res.send(users)
})

function validate(data){

    return function (req,res,next) {
        Object.keys(data).forEach((lel)=>{
            // console.log(lel);
            if( !req.query[lel]){
              return  res.send(`please add ${lel}`)
            }
        })
        next()
    }
}

app.listen(5000,()=>{
    console.log(5000);
})