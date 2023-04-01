import { combineReducers } from "redux";
// import Constants from "../reduxConstants";
import Intro from "./intro";
import Education from "./education";
import Experiances from "./experiance";

const appReducer = combineReducers({
  Intro,
  Education,
  Experiances,
});

const rootReducer = (state, action) => {
  //   if (action.type === Constants.USER_DISCONNECTED) {
  //     state = undefined;
  //   }

  return appReducer(state, action);
};

export default rootReducer;
