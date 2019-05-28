import { actionType } from "../actions/offline-equipment-action";

const initialState = {
  offlineEquipment: {},
  status: "START",
  msg: ""
};

export function offlineEquipment(state = initialState, action) {
  switch (action.type) {
    case actionType.offlineEquipment:
      if (action.offlineEquipment.code === 200) {
        return {
          ...state,
          offlineEquipment: action.offlineEquipment.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          offlineEquipment: {},
          status: "FAIL",
          msg: action.offlineEquipment.message
        };
      }
    default:
      return state;
  }
}
