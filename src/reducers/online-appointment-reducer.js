import { actionType } from "../actions/online-appointment-action";

const initialState = {
  keywordSearch: {},
  status: "START",
  msg: ""
};

export function onlineAppointment(state = initialState, action) {
  switch (action.type) {
    case actionType.onlineAppointment:
      if (action.onlineAppointment.code === 200) {
        return {
          ...state,
          onlineAppointment: action.onlineAppointment.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          onlineAppointment: {},
          status: "FAIL",
          msg: action.onlineAppointment.message
        };
      }
    default:
      return state;
  }
}
