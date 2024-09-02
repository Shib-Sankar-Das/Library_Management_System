import express from "express"
import getEndPoint from "./GET/endPoint.js";
import AdminRouter from "./AdminRouter/index.js";
const BookRouter = express.Router();
BookRouter.get('/books',getEndPoint);
BookRouter.use('/books',AdminRouter);
export default BookRouter;