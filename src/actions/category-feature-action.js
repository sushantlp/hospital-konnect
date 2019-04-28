import api from "../utils/api";

export const actionType = {
  categoryFeature: "CATEGORY_FEATURE"
};

export function getCategoryFeature(partnerId) {
  return dispatch => {
    api
      .categoryFeatureApi(partnerId)
      .then(categoryFeature =>
        dispatch({ type: actionType.categoryFeature, categoryFeature })
      );
  };
}
