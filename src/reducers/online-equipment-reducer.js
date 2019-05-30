import { actionType } from "../actions/online-equipment-action";

const initialState = {
  onlineEquipment: {},
  status: "START",
  msg: ""
};

export function onlineEquipment(state = initialState, action) {
  switch (action.type) {
    case actionType.onlineEquipment:
      if (action.onlineEquipment.code === 200) {
        return {
          ...state,
          onlineEquipment: action.onlineEquipment.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          onlineEquipment: {},
          status: "FAIL",
          msg: action.onlineEquipment.message
        };
      }
    default:
      return state;
  }
}
