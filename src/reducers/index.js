import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import userAuthDetails from "./common/userAuth/reducers";

export default combineReducers({
  form: formReducer,
  userAuthDetails,
});
