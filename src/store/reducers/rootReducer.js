import { combineReducers } from "redux";
// import Constants from "../reduxConstants";
import Intro from "./intro";
import Education from "./education";

const appReducer = combineReducers({
  Intro,
  Education,
});

const rootReducer = (state, action) => {
  //   if (action.type === Constants.USER_DISCONNECTED) {
  //     state = undefined;
  //   }

  return appReducer(state, action);
};

export default rootReducer;
