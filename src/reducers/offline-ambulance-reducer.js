import { actionType } from "../actions/offline-ambulance-action";

const initialState = {
  offlineAmbulance: {},
  status: "START",
  msg: ""
};

export function offlineAmbulance(state = initialState, action) {
  switch (action.type) {
    case actionType.offlineAmbulance:
      if (action.offlineAmbulance.code === 200) {
        return {
          ...state,
          offlineAmbulance: action.offlineAmbulance.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          offlineAmbulance: {},
          status: "FAIL",
          msg: action.offlineAmbulance.message
        };
      }
    default:
      return state;
  }
}
