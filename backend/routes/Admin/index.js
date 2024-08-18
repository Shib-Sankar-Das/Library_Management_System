import express from "express";
import GET from "./GET/methods.js"
const AdminRouter = express.Router();
AdminRouter.route("/admin")
  .get(
    GET.invalidCookiesError,
    GET.invalidCredentialError,
    GET.adminNotFoundError,
    GET.endPoint
  );
export default AdminRouter;