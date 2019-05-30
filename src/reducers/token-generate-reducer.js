import { actionType } from "../actions/token-generate-action";

const initialState = {
  tokenGenerate: {},
  status: "START",
  msg: ""
};

export function tokenGenerate(state = initialState, action) {
  switch (action.type) {
    case actionType.tokenGenerate:
      if (action.tokenGenerate.code === 200) {
        return {
          ...state,
          tokenGenerate: action.tokenGenerate.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          tokenGenerate: {},
          status: "FAIL",
          msg: action.tokenGenerate.message
        };
      }
    default:
      return state;
  }
}
