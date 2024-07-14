import mongoose from "mongoose";
import Book from "./Book.js";
import User from "./User.js";
import Admin from "./Admin.js";
import Borrow from "./Borrow.js";
export default {
  Schemas:{
    bookCopySchema:Book.bookCopySchema,
    bookSchema:Book.bookSchema,
    userSchema:User.userSchema,
    adminSchema:Admin.adminSchema,
    borrowSchema:Borrow.borrowSchema
  },
  Models:{
    BookCopyModel:Book.BookCopyModel,
    BookModel:Book.BookModel,
    UserModel:User.UserModel,
    AdminModel:Admin.AdminModel,
    BorrowModel:Borrow.BorrowModel
  }
};