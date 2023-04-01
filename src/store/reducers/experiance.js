import constants from "../reduxConstants";

const initialState = {
  experiances: [],
};

function Experiances(state = initialState, action) {
  switch (action.type) {
    case constants.EXPERIANCE: {
      return {
        ...state,
        experiances: action.experiances,
      };
    }

    default:
      return state;
  }
}

export default Experiances;
