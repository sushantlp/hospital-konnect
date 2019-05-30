import { actionType } from "../actions/side-bar-action";

const initialState = {
  sideBarList: {},
  status: "START",
  msg: ""
};

export function sideBarList(state = initialState, action) {
  switch (action.type) {
    case actionType.sideBarList:
      if (action.sideBarList.code === 200) {
        return {
          ...state,
          sideBarList: action.sideBarList.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          sideBarList: {},
          status: "FAIL",
          msg: action.sideBarList.message
        };
      }
    default:
      return state;
  }
}
