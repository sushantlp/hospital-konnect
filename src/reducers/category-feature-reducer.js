import { actionType } from "../actions/category-feature-action";

const initialState = {
  categoryFeature: {},
  status: "START",
  msg: ""
};

export function categoryFeature(state = initialState, action) {
  switch (action.type) {
    case actionType.categoryFeature:
      if (action.categoryFeature.code === 200) {
        return {
          ...state,
          categoryFeature: action.categoryFeature.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          categoryFeature: {},
          status: "FAIL",
          msg: action.categoryFeature.message
        };
      }
    default:
      return state;
  }
}
