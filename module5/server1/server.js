const express = require("express")

// server bn gya
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello from server")
})

app.get("/bye", (req,res)=>{
    res.send("<h1>Bye</h1>")
})

app.listen(5000, ()=>{
    console.log("seever started at http://localhost:5000/");
})
