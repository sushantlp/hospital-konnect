import api from "../utils/api";

export const actionType = {
  sideBarList: "SIDE_BAR"
};

export function getSideBar(categoryId) {
  return dispatch => {
    api
      .sideBarApi(categoryId)
      .then(sideBarList =>
        dispatch({ type: actionType.sideBarList, sideBarList })
      );
  };
}
