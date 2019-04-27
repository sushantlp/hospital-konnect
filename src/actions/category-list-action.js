import api from "../utils/api";

export const actionType = {
  categoryList: "CATEGORY_LIST"
};

export function getCategoryList(cityId, localityId, categoryId, type, page) {
  return dispatch => {
    api
      .categoryListApi(cityId, localityId, categoryId, type, page)
      .then(categoryList =>
        dispatch({ type: actionType.categoryList, categoryList })
      );
  };
}
