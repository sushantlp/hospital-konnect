import { actionType } from "../actions/mobile-register-action";

const initialState = {
  mobileRegister: {},
  status: "START",
  msg: ""
};

export function mobileRegister(state = initialState, action) {
  switch (action.type) {
    case actionType.mobileRegister:
      if (action.mobileRegister.code === 200) {
        return {
          ...state,
          mobileRegister: action.mobileRegister.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          mobileRegister: {},
          status: "FAIL",
          msg: action.mobileRegister.message
        };
      }
    default:
      return state;
  }
}
