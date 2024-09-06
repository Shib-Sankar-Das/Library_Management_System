import model from "../../../../models/index.js";
/**
 * @name insertNewBook
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 * @returns {void}
 */
const insertNewBook = async (request, response, next) => {
  try {
    // console.log(request.files);
    let doc  = await (new model.Models.BookCopyModel({...request.body,CoverPage:request.files.CoverPage.data})).save();
    doc = JSON.parse(JSON.stringify(doc));
    delete doc["CoverPage"];
    delete doc["__v"];
    delete doc["_id"];
    const copies = doc.Copies;
    delete doc["Copies"];
    for (let i = 0; i < copies; i++)
      (new model.Models.BookModel({...doc,Borrowed:false})).save()
    request.body = doc;
    next();
  } catch (e) {
    response.status(403).json({ err: e.message });
  }
}
export default insertNewBook;