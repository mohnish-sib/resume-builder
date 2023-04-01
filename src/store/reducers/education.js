import constants from "../reduxConstants";

const initialState = {
  educations: [],
};

function Education(state = initialState, action) {
  switch (action.type) {
    case constants.EDUCATION: {
      return {
        ...state,
        educations: action.educations,
      };
    }

    default:
      return state;
  }
}

export default Education;
