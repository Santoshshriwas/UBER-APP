const dotenv = require("dotenv");
dotenv.config();
const express= require("express");
const connectToDB= require("./db/db")
const user=require("./routes/userRoutes");
const captain = require("./routes/captainRoutes");
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
app.use("/users",user);
app.use("/captains",captain);

module.exports=app;



