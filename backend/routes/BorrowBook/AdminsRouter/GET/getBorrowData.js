// import Borrow from '../../../../models/Borrow.js';
import models from './../../../../models/index.js'
/**
 * @name getBorrowData
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */
const getBorrowData = async (request, response, next) => {
  try {
    let doc = await models.Models.BorrowModel.aggregate([
      {
        $lookup: {
          from: "book_copy_models",
          localField: "ISBN",
          foreignField: "ISBN",
          as: "books"
        }
      },
      {
        $addFields: {
          book: {
            $arrayElemAt: ["$books", 0]
          }
        }
      },
      {
        $project: {
          books: 0,
          __v: 0
        }
      },
      {
        $addFields: {
          BookIDString: {
            $toString: "$book._id"
          },
          UserIDString: {
            $toString: "$UserID"
          }
        }
      },
      {
        $addFields: {
          BookImage: {
            $concat: [
              "http://localhost:4000/api/image/client/",
              "$BookIDString",
              ".jpeg"
            ]
          },
          UserImage: {
            $concat: [
              "http://localhost:4000/api/image/client/",
              "$UserIDString",
              ".jpeg"
            ]
          }
        }
      },
      {
        $project: {
          BookIDString: 0,
          book: 0,
          UserIDString: 0
        }
      },
      {
        $addFields: {
          tempField: {
            Email: "$UserEmail",
            Avatar: "$UserImage",
            Name: "$UserName",
            _id: "$UserID"
          }
        }
      },
      {
        $project: {
          UserName: 0,
          UserID: 0,
          UserEmail: 0,
          UserImage: 0
        }
      },
      {
        $group: {
          _id: "$tempField",
          BorrowRequests: {
            $addToSet: "$$ROOT"
          }
        }
      },
      {
        $project: {
          _id: 0,
          User: "$_id",
          BorrowRequests: {
            $map: {
              input: "$BorrowRequests",
              as: "item",
              in: {
                _id: "$$item._id",
                BorrowDate: "$$item.BorrowDate",
                RenewalDate: "$$item.RenewalDate",
                BookID: "$$item.BookID",
                BookName: "$$item.BookName",
                ISBN: "$$item.ISBN",
                Approved: "$$item.Approved",
                BookImage: "$$item.BookImage"
              }
            }
          }
        }
      }
    ]);
    request.query = JSON.parse(JSON.stringify(doc));
    next();
  } catch (e) {
    response.status(401).json({ err: e.message });
  }
}
export default getBorrowData;