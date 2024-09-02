import express from "express";
import GET from './GET/methods.js'
const AdminRouter = express.Router();
AdminRouter.use('/admin',(req, res, next) => {
  if (req.method !== 'GET') res.status(405).json({ error: 'Method Not Allowed: Only GET requests are permitted.' });
  next();
});
AdminRouter
  .route('/admin')
  .get(
    GET.invalidCookiesError,
    GET.invalidRequestError,
    GET.getBookData,
    GET.endPoint
  );
export default AdminRouter;