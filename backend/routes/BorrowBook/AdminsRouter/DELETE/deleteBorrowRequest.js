import models from './../../../../models/index.js';

/**
 * @name deleteBorrowRequest
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 * @param {import('express').NextFunction} next
 */
const deleteBorrowRequest = async (request, response, next) => {
  try {
    const _id = request.body._id;
    const doc = JSON.parse(JSON.stringify(
      await models.Models.BorrowModel.findById(_id)
    ));
    if (doc["Approved"]) {
      const book_id = doc["BookID"];
      const doc1 = JSON.parse(JSON.stringify(
        await models.Models.BookModel.updateOne({ _id: book_id }, { Borrowed: false })
      ));
      const doc2 = JSON.parse(JSON.stringify(
        await models.Models.BorrowModel.deleteOne({ _id: _id })
      ));
      request.body = doc2;
      // console.group("delete borrow request");
      // console.dir(doc, doc1, doc2, book_id, _id);
      // console.groupEnd();
    } else {
      const doc2 = JSON.parse(JSON.stringify(
        await models.Models.BorrowModel.deleteOne({ _id: _id })
      ));
      request.body = doc2;
    }
    next();
  } catch (e) {
    response.status(400).json({ err: e.message });
  }
};
export default deleteBorrowRequest;