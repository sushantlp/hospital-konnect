import { actionType } from "../actions/keyword-action";

const initialState = {
  keywordSearch: {},
  status: "START",
  msg: ""
};

export function keywordSearch(state = initialState, action) {
  switch (action.type) {
    case actionType.keywordSearch:
      if (action.keywordSearch.code === 200) {
        return {
          ...state,
          keywordSearch: action.keywordSearch.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          keywordSearch: {},
          status: "FAIL",
          msg: action.keywordSearch.message
        };
      }
    default:
      return state;
  }
}
