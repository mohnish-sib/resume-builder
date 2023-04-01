import constants from "../reduxConstants";

const initialState = {
  education: [],
};

function Education(state = initialState, action) {
  switch (action.type) {
    case constants.EDUCATION: {
      return {
        ...state,
        education: action.education,
      };
    }

    default:
      return state;
  }
}

export default Education;
