import express from "express";
import GET from './GET/methods.js'
import DELETE from  "./DELETE/methods.js"
const AdminsRouter = express.Router();
// AdminsRouter.use('/admin',(req, res, next) => {
//   if (req.method !== 'GET') res.status(405).json({ error: 'Method Not Allowed: Only GET requests are permitted.' });
//   next();
// });
AdminsRouter.route('/admin')
  .get(
    GET.invalidCookiesError,
    GET.getBorrowData,
    GET.endPoint
  )
  .delete(
    DELETE.invalidCookiesError,
    DELETE.invalidRequestError,
    DELETE.deleteBorrowRequest,
    DELETE.endPoint
  );
export default AdminsRouter;
