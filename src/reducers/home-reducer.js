import { actionType } from "../actions/home-action";

const initialState = {
  homeDetail: {},
  status: "START",
  msg: ""
};

export function homeDetail(state = initialState, action) {
  switch (action.type) {
    case actionType.homeDetail:
      if (action.homeDetail.code === 200) {
        return {
          ...state,
          homeDetail: action.homeDetail.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          homeDetail: {},
          status: "FAIL",
          msg: action.homeDetail.message
        };
      }
    default:
      return state;
  }
}
