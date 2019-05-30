import { actionType } from "../actions/referral-bed-action";

const initialState = {
  referralBed: {},
  status: "START",
  msg: ""
};

export function referralBed(state = initialState, action) {
  switch (action.type) {
    case actionType.referralBed:
      if (action.referralBed.code === 200) {
        return {
          ...state,
          referralBed: action.referralBed.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          referralBed: {},
          status: "FAIL",
          msg: action.referralBed.message
        };
      }
    default:
      return state;
  }
}
