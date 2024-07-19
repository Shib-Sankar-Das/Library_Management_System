import duplicateCredentialError from "./POST/duplicateCredentialError";
import invalidMimeTypeError from "./POST/invalidMimeTypeError";
import invalidCredentialError from "./POST/invalidCredentialError";
import endPoint from "./POST/endPoint";
export default
  {
    routeName:"client-registration",
    POST:{ duplicateCredentialError, invalidCredentialError, invalidMimeTypeError, endPoint }
  }