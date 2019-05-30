import { actionType } from "../actions/online-nursing-action";

const initialState = {
  onlineNursing: {},
  status: "START",
  msg: ""
};

export function onlineNursing(state = initialState, action) {
  switch (action.type) {
    case actionType.onlineNursing:
      if (action.onlineNursing.code === 200) {
        return {
          ...state,
          onlineNursing: action.onlineNursing.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          onlineNursing: {},
          status: "FAIL",
          msg: action.onlineNursing.message
        };
      }
    default:
      return state;
  }
}
