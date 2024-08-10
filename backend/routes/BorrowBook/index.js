import express from "express"
import GET from "./GET/methods.js"
import POST from "./POST/methods.js"
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
  );
export default BorrowRouter;