import { combineReducers } from "redux";

import error from "./error";
import searchResult from "./searchResult";

export default combineReducers({
  error,
  searchResult,
});
