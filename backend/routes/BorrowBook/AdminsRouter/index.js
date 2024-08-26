import express from "express";
import GET from './GET/methods.js'
const AdminsRouter = express.Router();
AdminsRouter.route('/admin')
  .get(
    GET.invalidCookiesError,
    GET.getBorrowData,
    GET.endPoint
  );
AdminsRouter.use('/admin',(req, res, next) => {
  if (req.method !== 'GET') res.status(405).json({ error: 'Method Not Allowed: Only GET requests are permitted.' });
  next();
});
export default AdminsRouter;