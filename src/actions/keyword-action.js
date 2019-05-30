import api from "../utils/api";

export const actionType = {
  keywordSearch: "KEYWORD_SEARCH"
};

export function getKeywordSearch(cityId) {
  return dispatch => {
    api
      .keywordSearchApi(cityId)
      .then(keywordSearch =>
        dispatch({ type: actionType.keywordSearch, keywordSearch })
      );
  };
}
