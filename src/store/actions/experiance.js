import constants from "../reduxConstants";

export function setExperiance(experiances) {
  return {
    type: constants.EXPERIANCE,
    experiances,
  };
}
