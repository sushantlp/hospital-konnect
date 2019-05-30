import { actionType } from "../actions/online-bed-action";

const initialState = {
  onlineBed: {},
  status: "START",
  msg: ""
};

export function onlineBed(state = initialState, action) {
  switch (action.type) {
    case actionType.onlineBed:
      if (action.onlineBed.code === 200) {
        return {
          ...state,
          onlineBed: action.onlineBed.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          onlineBed: {},
          status: "FAIL",
          msg: action.onlineBed.message
        };
      }
    default:
      return state;
  }
}
