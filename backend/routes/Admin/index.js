import express from "express";
import GET from "./GET/methods.js";
import PUT from "./PUT/methods.js"
const AdminRouter = express.Router();
AdminRouter.route("/admin")
  .get(
    GET.invalidCookiesError,
    GET.invalidCredentialError,
    GET.adminNotFoundError,
    GET.endPoint
  )
  .put(
    PUT.invalidCookiesError,
    PUT.updateTextFields,
    PUT.updateProfilePicture,
    PUT.endPoint
  );
export default AdminRouter;