import express from "express"
import getEndPoint from "./GET/endPoint.js";
import getBadRequestError from "./GET/badRequestError.js";
import getInvalidCookiesError from "./GET/invalidCookiesError.js";
import postInvalidRequestError from './POST/invalidRequestError.js'
import postInvalidCookiesError from './POST/invalidCookiesError.js'
import postEndPoint from './POST/endPoint.js'
const BorrowRouter = express.Router();
BorrowRouter.route("/borrow-book")
  .get(getBadRequestError,getInvalidCookiesError,getEndPoint)
  .post(postInvalidCookiesError,postInvalidRequestError,postEndPoint);
export default BorrowRouter;