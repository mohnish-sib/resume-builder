import constants from "../reduxConstants";

export function setName(name) {
  return {
    type: constants.NAME,
    name,
  };
}

export function setCurrentPosition(current_position) {
  return {
    type: constants.CURRENT_POSITION,
    current_position,
  };
}

export function setPhoneNo(phone) {
  return {
    type: constants.PHONE_NO,
    phone,
  };
}

export function setEmail(email) {
  return {
    type: constants.EMAIL,
    email,
  };
}
