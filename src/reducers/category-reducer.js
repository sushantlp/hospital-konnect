import { actionType } from "../actions/category-action";

const initialState = {
  categoryDetail: {},
  status: "START",
  msg: ""
};

export function categoryDetail(state = initialState, action) {
  switch (action.type) {
    case actionType.categoryDetail:
      if (action.categoryDetail.code === 200) {
        return {
          ...state,
          categoryDetail: action.categoryDetail.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          categoryDetail: {},
          status: "FAIL",
          msg: action.categoryDetail.message
        };
      }
    default:
      return state;
  }
}
