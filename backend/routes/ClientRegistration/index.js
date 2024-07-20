import duplicateCredentialError from "./POST/duplicateCredentialError.js";
import invalidMimeTypeError from "./POST/invalidMimeTypeError.js";
import invalidCredentialError from "./POST/invalidCredentialError.js";
import endPoint from "./POST/endPoint.js";
export default
  {
    routeName:"client-registration",
    POST:{ duplicateCredentialError, invalidCredentialError, invalidMimeTypeError, endPoint }
  }