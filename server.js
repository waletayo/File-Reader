const express =require("express");

const app= express();

const port=8080;

const index=require("./index");
app.use("/",index);


app.listen(port, ()=>{
    console.log("server is runing on port " ,port);
})