import { actionType } from "../actions/otp-verify-action";

const initialState = {
  otpVerify: {},
  status: "START",
  msg: ""
};

export function otpVerify(state = initialState, action) {
  switch (action.type) {
    case actionType.otpVerify:
      if (action.otpVerify.code === 200) {
        return {
          ...state,
          otpVerify: action.otpVerify.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          otpVerify: {},
          status: "FAIL",
          msg: action.otpVerify.message
        };
      }
    default:
      return state;
  }
}
