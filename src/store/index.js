import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "inc") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   return state;
// };

const store = createStore(rootReducer);

export default store;
