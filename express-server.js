const express = require('express');

const app =express();

app.get('/',(req,res)=>{

  res.send("Hii this is express js");
});

app.listen(6199,()=>{
  console.log("Server started at port 6199");
});