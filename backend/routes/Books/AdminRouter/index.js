import express from "express";
import GET from './GET/methods.js'
import PUT from "./PUT/methods.js"
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
  .put(
    PUT.invalidCookiesError,
    PUT.invalidRequestError,
    PUT.updateBorrowDetails,
    PUT.endPoint
  );
export default AdminRouter;