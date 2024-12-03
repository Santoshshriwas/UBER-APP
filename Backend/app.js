const dotenv = require("dotenv");
dotenv.config();
const express= require("express");
const connectToDB= require("./db/db")
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
connectToDB();

app.get("/",(req,res)=>{
  res.send("Hello World");
})

module.exports=app;



