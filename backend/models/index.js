import Book from "./Book.js";
import User from "./User.js";
import Admin from "./Admin.js";
import Borrow from "./Borrow.js";
export default {
  Schemas:{
    BookSchema:Book.BookSchema,
    UserSchema:User.UserSchema,
    AdminSchema:Admin.AdminSchema,
    BorrowSchema:Borrow.BorroeSchema
  },
  Models:{
    bookModel:Book.bookModel,
    userModel:User.userModel,
    adminModel:Admin.adminModel,
    borrowModel:Borrow.borrowModel
  }
};