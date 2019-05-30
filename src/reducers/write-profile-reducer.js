import { actionType } from "../actions/write-profile-action";

const initialState = {
  writeProfile: {},
  status: "START",
  msg: ""
};

export function writeProfile(state = initialState, action) {
  switch (action.type) {
    case actionType.writeProfile:
      if (action.writeProfile.code === 200) {
        return {
          ...state,
          writeProfile: action.writeProfile.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          writeProfile: {},
          status: "FAIL",
          msg: action.writeProfile.message
        };
      }
    default:
      return state;
  }
}
