import api from "../utils/api";

export const actionType = {
  categoryList: "CATEGORY_LIST",
  categoryListMerge: "CATEGORY_LIST_MERGE"
};

export function getCategoryList(
  cityId,
  localityId,
  categoryId,
  type,
  page,
  flag
) {
  return dispatch => {
    api
      .categoryListApi(cityId, localityId, categoryId, type, page)
      .then(categoryList =>
        dispatch({
          type: flag ? actionType.categoryList : actionType.categoryListMerge,
          categoryList
        })
      );
  };
}
