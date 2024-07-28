import mongoose from 'mongoose';
import models from './../../../models/index.js'
import express from 'express';
/**
 * @description renders all the book in the ejs template
 * @param {express.Request} request 
 * @param {express.Response} response 
 */
const endPoint = async (request, response) => {
  /**
   * @type {import('../../../models/Book.js').BookCopyObject[]}
  */
  let Data = await models.Models.BookCopyModel.find({});
  Data = JSON.parse(JSON.stringify(Data));
  response.json(Data.map((item) => {
    delete item.CoverPage;
    delete item.__v
    item.ImageLink = `http://localhost:4000/api/image/book/${item._id}`;
    return item;
  }));

}
export default endPoint;