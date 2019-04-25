import api from "../utils/api";

export const actionType = {
  homeDetail: "HOME_DETAIL"
};

export function getHomeDetail(cityId) {
  return dispatch => {
    api
      .homeDetailApi(cityId)
      .then(homeDetail =>
        dispatch({ type: actionType.homeDetail, homeDetail })
      );
  };
}
