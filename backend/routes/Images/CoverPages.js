import express from 'express';
import fs from 'fs';
// import mongoose from 'mongoose';
import models from './../../models/index.js';
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const CoverPage = async (req, res) => {
  try{
    let book_copy_id = req.params.book_copy_id.split(".").shift();
    const { CoverPage } = JSON.parse(JSON.stringify(await models.Models.BookCopyModel.findOne({ _id:book_copy_id })));
    if(CoverPage==null) throw new Error("not found");
    res.type("image/jpeg");
    res.send(Buffer.from(CoverPage.data,"base64url"));
  }catch(e){
    res.send(fs.readFileSync('./assets/not-found.svg'));
  }
}
export default CoverPage; 