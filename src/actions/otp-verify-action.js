import api from "../utils/api";

export const actionType = {
  otpVerify: "OTP_VERIFY"
};

export function postOtpVerify(mobile, otp) {
  return dispatch => {
    api
      .otpVerifyApi(mobile, otp)
      .then(otpVerify => dispatch({ type: actionType.otpVerify, otpVerify }));
  };
}
