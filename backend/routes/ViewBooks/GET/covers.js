import mongoose from 'mongoose';
import models from './../../../models/index.js'
import express from 'express';
/**
 * @description renders all the book in the ejs template
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
const covers = async (request,response) => {
  if(request.params.Subject == 'All'){
    let Data = await models.Models.BookCopyModel.find({});
    Data = JSON.parse(JSON.stringify(Data));
    response.render('book.ejs',{Data:Data.map(i=>{
      delete i.CoverPage;
      i.ImageLink = 'http://localhost:4000/api/covers/'+i._id;
      return i;
    })});
    /*render('book.ejs',{Data:})*/;
  }
}
export default covers;