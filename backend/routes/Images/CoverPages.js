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
    /**
     * await import('mongoose')
     */
    const { CoverPage } = JSON.parse(JSON.stringify(await models.Models.BookCopyModel.findOne({ _id: req.params.id })));
    if(CoverPage==null) throw new Error();
    res.send(Buffer.from(CoverPage.data));
  }catch(e){
    res.send(fs.readFileSync('./assets/not-found.svg'));
  }
}
export default CoverPage; 