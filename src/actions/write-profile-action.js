import api from "../utils/api";

export const actionType = {
  writeProfile: "WRITE_PROFILE"
};

export function writeProfileDetail(customerId, firstName, lastName, email) {
  return dispatch => {
    api
      .writeProfileDetailApi(customerId, firstName, lastName, email)
      .then(writeProfile =>
        dispatch({ type: actionType.writeProfile, writeProfile })
      );
  };
}
