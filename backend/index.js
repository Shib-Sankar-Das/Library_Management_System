import express from "express";
import path from "path";
import routes from "./routes/index.js";
import { connect } from "mongoose";
try{
  const APP = express();
  connect('')
  APP.use(express.json());
  APP.use(express.urlencoded({extended:true}));
  APP.set('view engine','ejs');
  APP.set('views',path.resolve('./views'));
  //borrow_book
  APP.get(routes.BorrowBook.routeName,...[],routes.BorrowBook.GET.endPoint);


  APP.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
  })
}catch(e){
  console.error(e);
}