import { actionType } from "../actions/offline-bed-action";

const initialState = {
  offlineBed: {},
  status: "START",
  msg: ""
};

export function offlineBed(state = initialState, action) {
  switch (action.type) {
    case actionType.offlineBed:
      if (action.offlineBed.code === 200) {
        return {
          ...state,
          offlineBed: action.offlineBed.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          offlineBed: {},
          status: "FAIL",
          msg: action.offlineBed.message
        };
      }
    default:
      return state;
  }
}
