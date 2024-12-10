import express from "express";
import GET from "./GET/methods.js";
import PUT from "./PUT/methods.js";
import POST from "./POST/methods.js";
const AdminRouter = express.Router();
// AdminRouter.use('/admin',(req, res, next) => {
//   if (req.method !== 'GET' || req.method !== 'PUT') res.status(405).json({ error: 'Method Not Allowed: Only GET requests are permitted.' });
//   next();
// });
AdminRouter
  .route('/admin')
  .get(
    GET.invalidCookiesError,
    GET.invalidRequestError,
    GET.getBookData,
    GET.endPoint
  )
  .post(
    POST.invalidCookiesError,
    POST.invalidMimeTypeError,
    POST.invalidRequesrError,
    POST.insertNewBook,
    POST.endPoint
  )
  .put(
    PUT.invalidCookiesError,
    PUT.invalidRequestError,
    PUT.updateBorrowDetails,
    PUT.endPoint
  );
export default AdminRouter;