const express =require("express");
const router= express.Router();
const fs =require("fs");


router.get("/",(req,res,next)=>{
    let arr=[];
    const getData= (fileName,type)=>
 
 new Promise((resolve, reject)=>
 
 fs.readFile(fileName,type,(err,data)=>{
     
     return err? reject(err) : resolve(data);
 }));
 
 getData("./data.out", 'utf8')
 .then(data =>{
     console.log("data", data);
     let array =data.toString().split('\n')
     for(let i in array){
         console.log(array[i]);
         arr.push(parseInt( array[i]));
     }
      console.log("arr",arr);
      return res.json({
             arr:arr
         });
     
 }).catch(error=>{
     console.log("error",error);
     return next(error);
 })

});

router.get("/reverse",(req,res,next)=>{
    
    let arr=[];
    const getData= (fileName,type)=>
 
 new Promise((resolve, reject)=>
 
 fs.readFile(fileName,type,(err,data)=>{
     
     return err? reject(err) : resolve(data);
 }));
 
 getData("./data.out", 'utf8')
 .then(data =>{
     console.log("data", data);
     let array =data.toString().split('\n')
     for(let i in array){
         console.log(array[i]);
         arr.push(parseInt( array[i]));
     }
     arr.reverse();
      console.log("arr",arr);
      return res.json({
             arr:arr
         });
     
 }).catch(error=>{
     console.log("error",error);
     return next(error);
 });
    
});







module.exports=router;