import { actionType } from "../actions/category-list-action";

const initialState = {
  categoryList: {},
  status: "START",
  msg: ""
};

export function categoryList(state = initialState, action) {
  switch (action.type) {
    case actionType.categoryList:
      if (action.categoryList.code === 200) {
        return {
          ...state,
          categoryList: action.categoryList.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          categoryList: {},
          status: "FAIL",
          msg: action.categoryList.message
        };
      }
    default:
      return state;
  }
}
