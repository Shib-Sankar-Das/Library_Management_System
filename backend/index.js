import express from "express";
import path from "path";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { connect } from "mongoose";
try{
  dotenv.config();
  connect(process.env.DATABASE_URL);

  const APP = express();
  APP.use(express.json());
  APP.use(express.urlencoded({extended:true}));
  APP.set('view engine','ejs');
  APP.set('views',path.resolve('./views'));
  
  APP.get('/',(req,res)=>{
    res.status(200).send('wellcome to LMS_MERN.');
  })
  
  APP.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
  })
}catch(e){
  console.log(e.message);
}