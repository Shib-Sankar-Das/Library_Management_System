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
  let Data = await models.Models.BookCopyModel.aggregate([
    {
      $project: {
        CoverPage: 0,
        __v: 0
      }
    },
    {
      $addFields: {
        idString: {
          $toString: "$_id"
        }
      }
    },
    {
      $addFields: {
        ImageLink: {
          $concat: [
            "http://localhost:4000/api/image/book/",
            "$idString",
            ".jpeg"
          ]
        }
      }
    },
    {
      $project: {
        "idString": 0
      }
    }
  ]);
  Data = JSON.parse(JSON.stringify(Data));
  // console.log(Data);
  response.json(Data);

}
export default endPoint;