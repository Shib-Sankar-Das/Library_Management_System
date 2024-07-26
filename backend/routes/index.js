import express from "express"
import BorrowBook from "./BorrowBook/index.js";
import ViewBooks from "./Books/index.js";
import ImageRouter from "./Images/index.js";
import UserRouter from "./User/index.js";
const Router = express.Router();
Router.use('/api',UserRouter);
Router.use('/api',BorrowBook);
Router.use('/api',ViewBooks);
Router.use('/api',ImageRouter);
export default Router;