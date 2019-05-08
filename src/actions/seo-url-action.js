import api from "../utils/api";

export const actionType = {
  seoUrlList: "SEO_URL"
};

export function getSeoUrl(partnerId) {
  return dispatch => {
    api
      .seoUrlApi(partnerId)
      .then(seoUrlList =>
        dispatch({ type: actionType.seoUrlList, seoUrlList })
      );
  };
}
