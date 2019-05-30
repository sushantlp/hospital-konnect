import { actionType } from "../actions/read-profile-action";

const initialState = {
  readProfile: {},
  status: "START",
  msg: ""
};

export function readProfile(state = initialState, action) {
  switch (action.type) {
    case actionType.readProfile:
      if (action.readProfile.code === 200) {
        return {
          ...state,
          readProfile: action.readProfile.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          readProfile: {},
          status: "FAIL",
          msg: action.readProfile.message
        };
      }
    default:
      return state;
  }
}
