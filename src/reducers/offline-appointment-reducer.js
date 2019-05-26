import { actionType } from "../actions/offline-appointment-action";

const initialState = {
  keywordSearch: {},
  status: "START",
  msg: ""
};

export function offlineAppointment(state = initialState, action) {
  switch (action.type) {
    case actionType.offlineAppointment:
      if (action.offlineAppointment.code === 200) {
        return {
          ...state,
          offlineAppointment: action.offlineAppointment.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          offlineAppointment: {},
          status: "FAIL",
          msg: action.offlineAppointment.message
        };
      }
    default:
      return state;
  }
}
