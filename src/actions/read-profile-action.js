import api from "../utils/api";

export const actionType = {
  readProfile: "READ_PROFILE"
};

export function readProfileDetail(customerId) {
  return dispatch => {
    api
      .readProfileDetailApi(customerId)
      .then(readProfile =>
        dispatch({ type: actionType.readProfile, readProfile })
      );
  };
}
