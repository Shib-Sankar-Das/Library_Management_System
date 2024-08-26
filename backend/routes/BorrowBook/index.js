import express from "express"
import GET from "./GET/methods.js"
import POST from "./POST/methods.js"
import PUT from "./PUT/methods.js"
import AdminsRouter from "./AdminsRouter/index.js"
const BorrowRouter = express.Router();

BorrowRouter.route("/borrow-book")
  .get(
    GET.badRequestError,
    GET.invalidCookiesError,
    GET.endPoint
  )
  .post(
    POST.invalidCookiesError,
    POST.invalidRequestError,
    POST.endPoint
  )
  .put(
    PUT.invalidCookiesError,
    PUT.invalidRequestError,
    PUT.endPoint
  )
BorrowRouter.use("/borrow-book",AdminsRouter);
export default BorrowRouter;