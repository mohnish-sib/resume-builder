import constants from "../reduxConstants";

const initialState = {
  name: "Mohnish Lokhande",
  current_position: "SDE 1",
  phone: "98989889",
  email: "mohnishlokhande14@gmail.com",
};

function Intro(state = initialState, action) {
  switch (action.type) {
    case constants.NAME: {
      return {
        ...state,
        name: action.name,
      };
    }

    case constants.CURRENT_POSITION: {
      return {
        ...state,
        current_position: action.current_position,
      };
    }

    case constants.PHONE_NO: {
      return {
        ...state,
        phone: action.phone,
      };
    }

    case constants.EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }

    default:
      return state;
  }
}

export default Intro;
