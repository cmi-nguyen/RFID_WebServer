const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
    host: "localhost" ,
    user: "root",
    password: "",
    database: "rfid"
});

app.use(cors());
app.use(express.json())

app.get("/getbill", (req ,res )=>{
    db.connect(function(err){
        if(err) throw err;
        db.query("SELECT * FROM `bill`",function (err, result, fields){
            if (err) throw err;
            console.log(result)
            res.send(result);
        })
    })
})

app.get("/getpri", (req ,res )=>{
    db.connect(function(err){
        if(err) throw err;
        db.query("SELECT * FROM `productinstancerfid`",function (err, result, fields){
            if (err) throw err;
            console.log(result)
            res.send(result);
        })
    })
})

app.get("/getprl", (req ,res )=>{
    db.connect(function(err){
        if(err) throw err;
        db.query("SELECT * FROM `producline`",function (err, result, fields){
            if (err) throw err;
            console.log(result)
            res.send(result);
        })
    })
})

app.get("/gettag", (req ,res )=>{
    db.connect(function(err){
        if(err) throw err;
        db.query("SELECT * FROM `tagread`",function (err, result, fields){
            if (err) throw err;
            console.log(result)
            res.send(result);
        })
    })
})


app.post("/addprl", (req,res)=>{
    const product_line_id = req.body.product_line_id; 
    db.connect(function(err){
        if(err) throw err;
        /////
    })
})
//To Do:  orther post method 

app.listen(3001, ()=>{
    console.log("Server running on port :3001");
})