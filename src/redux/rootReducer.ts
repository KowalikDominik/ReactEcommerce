import { combineReducers } from "redux";

import userReducer from "./userReducer/userReducer";
import cardReducer from "./cardReducer/cardReducer";

export default combineReducers({
  user: userReducer,
  card: cardReducer,
});
