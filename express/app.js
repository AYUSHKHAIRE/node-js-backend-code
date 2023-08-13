const express = require('express');
// made an app 
const app = express();
// imported 
let port;
port = 80;
// rubn app,on port 80 
app.get("/",(req,res)=>{
    res.send("this is my homepagefirst express app with harry");
})
app.get("/",(req,res)=>{
    res.status(200).send("this is my homepagefirst express app with harry");
})
// sent get request omn localhost 
app.get("/about",(req,res)=>{
    res.send("this is my get request b about page first express app with harry");
})
// sent post request on localhost 
app.post("/about",(req,res)=>{
    res.send("this is my  post request about page first express app with harry");
})
app.get("/abo",(req,res)=>{
    res.status(400).send("this is error request");
})
// we have to listen all requests ona port 
app.listen(port,()=>{
    console.log(`this express app is running on port ${port}`);
})