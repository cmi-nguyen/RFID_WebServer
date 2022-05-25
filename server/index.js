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
        db.query("SELECT * FROM `bill`",function (err, result, fields){
            if (err) throw err;
            res.send(result);
            
        })
        
})
app.get("/billdetails/:id",(req,res)=>{
    const id = req.params.id;
    db.query("SELECT product_instance_id FROM `billdetails` WHERE bill_id=?",id,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
    
})
app.get("/billitem/:id",(req,res)=>{
    const id = req.params.id;
    db.query("SELECT product_line_id FROM `productinstancerfid` WHERE product_instance_id=?",id,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
app.get("/billitems/:id",(req,res)=>{
    const id= req.params.id;
    db.query("SELECT product_line_id,name,price FROM `producline` WHERE product_line_id=?",id,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
    
})

app.get("/getpri", (req ,res )=>{
        db.query("SELECT * FROM `productinstancerfid`",function (err, result, fields){
            if (err) throw err;
            res.send(result);
        })
})


app.get("/getprl", (req ,res )=>{
        db.query("SELECT product_line_id,name,price FROM `producline` ",function (err, result, fields){
            if (err) throw err;
            res.send(result);
        })
})

app.get("/gettag", (req ,res )=>{

        db.query("SELECT * FROM `tagread`",function (err, result, fields){
            if (err) throw err;
            res.send(result);
        })

})



app.post("/addprl", (req, res) => {
    const product_line_id = req.body.product_line_id;
    const name = req.body.name;
    const price = req.body.price;
    db.query("SET foreign_key_checks = 0;")
    db.query(
      "INSERT INTO producline (product_line_id, name, price) VALUES (?,?,?);",
      [product_line_id, name, price],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  app.post("/addpri", (req, res) => {
    const product_instance_id = req.body.product_instance_id;
    const product_line_id= req.body.product_line_id;
    db.query("SET foreign_key_checks = 0;")
    db.query(
      "INSERT INTO productinstancerfid (product_instance_id, product_line_id) VALUES (?,?);",
      [product_instance_id ,product_line_id ],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.post("/addtag", (req, res) => {
    const tad_read_id = req.body.tad_read_id;
    const product_instance_id= req.body.product_instance_id;
    db.query("SET foreign_key_checks = 0;")
    db.query(
      "INSERT INTO tagread (tad_read_id, product_instance_id) VALUES (?,?);",
      [tad_read_id ,product_instance_id ],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.delete("/deletetag/:id", (req, res) => {
    const id = req.params.id;
    db.query("SET foreign_key_checks = 0;")
    db.query("DELETE FROM tagread WHERE tad_read_id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.delete("/deleteprl/:id", (req, res) => {
    const id = req.params.id;
    db.query("SET foreign_key_checks = 0;")
    db.query("DELETE FROM producline WHERE product_line_id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.delete("/deletepri/:id", (req, res) => {
    const id = req.params.id;
    db.query("SET foreign_key_checks = 0;")
    db.query("DELETE FROM productinstancerfid WHERE product_instance_id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/getbill/:data", (req ,res )=>{
    const data = req.params.data;
    db.query("SELECT * FROM `bill` where date>= ?",data,(err, result,)=>{
        if (err) throw err;
        res.send(result);
    });
    
});
//To Do:  orther post method 

app.listen(3001, ()=>{
    console.log("Server running on port :3001");
})