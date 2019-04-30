import { actionType } from "../actions/filter-action";

const initialState = {
  filterList: {},
  status: "START",
  msg: ""
};

export function filterList(state = initialState, action) {
  switch (action.type) {
    case actionType.filterList:
      if (action.filterList.code === 200) {
        return {
          ...state,
          filterList: action.filterList.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          filterList: {},
          status: "FAIL",
          msg: action.filterList.message
        };
      }
    default:
      return state;
  }
}
