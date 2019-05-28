import { actionType } from "../actions/ambulance-distance-action";

const initialState = {
  ambulanceDistance: {},
  status: "START",
  msg: ""
};

export function ambulanceDistance(state = initialState, action) {
  switch (action.type) {
    case actionType.ambulanceDistance:
      if (action.ambulanceDistance.code === 200) {
        return {
          ...state,
          ambulanceDistance: action.ambulanceDistance.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          ambulanceDistance: {},
          status: "FAIL",
          msg: action.ambulanceDistance.message
        };
      }
    default:
      return state;
  }
}
