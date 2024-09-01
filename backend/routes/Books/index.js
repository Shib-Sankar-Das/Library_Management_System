import express from "express"
import getEndPoint from "./GET/endPoint.js";
import AdminRouter from "./AdminRouter/index.js";
const BookRouter = express.Router();
BookRouter.get('/books',getEndPoint);
// BookRouter.use('/books/admin',AdminRouter);
export default BookRouter;