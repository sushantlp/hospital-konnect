import { actionType } from "../actions/offline-nursing-action";

const initialState = {
  offlineNursing: {},
  status: "START",
  msg: ""
};

export function offlineNursing(state = initialState, action) {
  switch (action.type) {
    case actionType.offlineNursing:
      if (action.offlineNursing.code === 200) {
        return {
          ...state,
          offlineNursing: action.offlineNursing.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          offlineNursing: {},
          status: "FAIL",
          msg: action.offlineNursing.message
        };
      }
    default:
      return state;
  }
}
