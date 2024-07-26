import express from "express"
import getEndPoint from "./GET/endPoint.js";
const BookRouter = express.Router();
BookRouter.get('/books',getEndPoint)
export default BookRouter;