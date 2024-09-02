/**
 * @name endPoint
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @returns {void}
 */
const endPoint = async (request, response) => {
  try {
    response.status(200).json(request.query);
  } catch (e) {
    response.status(500).json({ err: e.message });
  }
}
export default endPoint;