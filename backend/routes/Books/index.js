import express from "express"
import GET from "./GET/methods.js";
import AdminRouter from "./AdminRouter/index.js";
const BookRouter = express.Router();
BookRouter.get('/books',GET.endPoint);
BookRouter.use('/books',AdminRouter);
export default BookRouter;