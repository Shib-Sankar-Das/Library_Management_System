import JWT from 'jsonwebtoken';
/**
 * @name invalidCookiesError
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next
 */
const invalidCookiesError = async (request, response, next) => {
  try {
    const { _id } = JWT.decode(request.cookies._id, process.env.JWT_KEY);
    if (_id == null) throw new Error('Invalid cookies.');
    else {
      request.body = {...request.body,UserID:_id};
      next();      
    }
  } catch (e) {
    response.status(401).json({ err: e.message });
  }
}
export default invalidCookiesError;