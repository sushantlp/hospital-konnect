import { actionType } from "../actions/online-ambulance-action";

const initialState = {
  onlineAmbulance: {},
  status: "START",
  msg: ""
};

export function onlineAmbulance(state = initialState, action) {
  switch (action.type) {
    case actionType.onlineAmbulance:
      if (action.onlineAmbulance.code === 200) {
        return {
          ...state,
          onlineAmbulance: action.onlineAmbulance.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          onlineAmbulance: {},
          status: "FAIL",
          msg: action.onlineAmbulance.message
        };
      }
    default:
      return state;
  }
}
