import express from "express";
import path from "path";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import models from "./models/index.js";
import { connect } from "mongoose";
try{
  console.clear();
  dotenv.config();
  connect(process.env.DATABASE_URL);

  const APP = express();
  APP.use(express.json());
  APP.use(express.urlencoded({extended:true}));
  APP.set('view engine','ejs');
  APP.set('views',path.resolve('./views'));
  
  APP.get('/api/'+routes.ViewBooks.routeName+'/:Subject',routes.ViewBooks.GET.endPoint);
  /**
   * this route provides the cover page links
   */
  APP.get('/api/covers/:id',async (req,res)=>{  
    const {CoverPage} = JSON.parse(JSON.stringify(await models.Models.BookCopyModel.findOne({_id:req.params.id})));
    res.send(Buffer.from(CoverPage.data));
  })
  APP.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
  })
}catch(e){
  console.log(e.message);
}