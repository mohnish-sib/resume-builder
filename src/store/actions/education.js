import constants from "../reduxConstants";

export function setEducation(educations) {
  return {
    type: constants.EDUCATION,
    educations,
  };
}
