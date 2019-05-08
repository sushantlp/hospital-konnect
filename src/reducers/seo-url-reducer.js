import { actionType } from "../actions/seo-url-action";

const initialState = {
  seoUrlList: {},
  status: "START",
  msg: ""
};

export function seoUrlList(state = initialState, action) {
  switch (action.type) {
    case actionType.seoUrlList:
      if (action.seoUrlList.code === 200) {
        return {
          ...state,
          seoUrlList: action.seoUrlList.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          seoUrlList: {},
          status: "FAIL",
          msg: action.seoUrlList.message
        };
      }
    default:
      return state;
  }
}
