import { actionType } from "../actions/air-ambulance-action";

const initialState = {
  airAmbulance: {},
  status: "START",
  msg: ""
};

export function airAmbulance(state = initialState, action) {
  switch (action.type) {
    case actionType.airAmbulance:
      if (action.airAmbulance.code === 200) {
        return {
          ...state,
          airAmbulance: action.airAmbulance.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          airAmbulance: {},
          status: "FAIL",
          msg: action.airAmbulance.message
        };
      }
    default:
      return state;
  }
}
