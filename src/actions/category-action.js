import api from "../utils/api";

export const actionType = {
  categoryDetail: "CATEGORY_DETAIL"
};

export function getCategoryDetail() {
  return dispatch => {
    api
      .categoryDetailApi()
      .then(categoryDetail =>
        dispatch({ type: actionType.categoryDetail, categoryDetail })
      );
  };
}
