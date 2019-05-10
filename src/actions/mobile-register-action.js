import api from "../utils/api";

export const actionType = {
  mobileRegister: "MOBILE_REGISTER"
};

export function getMobileRegister(mobile) {
  return dispatch => {
    api
      .mobileRegisterApi(mobile)
      .then(mobileRegister =>
        dispatch({ type: actionType.mobileRegister, mobileRegister })
      );
  };
}
