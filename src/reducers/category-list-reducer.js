import { actionType } from "../actions/category-list-action";

const initialState = {
  categoryList: {},
  next_page: 1,
  prev_page: 0,
  status: "START",
  msg: ""
};

export function categoryList(state = initialState, action) {
  switch (action.type) {
    case actionType.categoryList:
      if (action.categoryList.code === 200) {
        return {
          ...state,
          categoryList: action.categoryList.data.data,
          next_page: action.categoryList.data.next_page,
          prev_page: action.categoryList.data.prev_page,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          categoryList: {},
          next_page: 0,
          prev_page: 0,
          status: "FAIL",
          msg: action.categoryList.message
        };
      }

    case actionType.categoryListMerge:
      if (action.categoryList.code === 200) {
        let previous = state.categoryList;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          categoryList: previous.concat(action.categoryList.data.data),
          next_page: action.categoryList.data.next_page,
          prev_page: action.categoryList.data.prev_page,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          categoryList: {},
          next_page: 0,
          prev_page: 0,
          status: "FAIL",
          msg: action.categoryList.message
        };
      }
    default:
      return state;
  }
}
