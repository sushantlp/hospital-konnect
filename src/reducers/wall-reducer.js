import { actionType } from "../actions/wall-action";

const initialState = {
  wallImage: {},
  status: "START",
  msg: ""
};

export function wallImage(state = initialState, action) {
  switch (action.type) {
    case actionType.wallImage:
      if (action.wallImage.code === 200) {
        return {
          ...state,
          wallImage: action.wallImage.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          wallImage: {},
          status: "FAIL",
          msg: action.wallImage.message
        };
      }
    default:
      return state;
  }
}
