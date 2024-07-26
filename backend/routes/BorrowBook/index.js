import express from "express"
import getEndPoint from "./GET/endPoint.js";
const BorrowRouter = express.Router();
BorrowRouter.get("/borrow-book",getEndPoint)
export default BorrowRouter;