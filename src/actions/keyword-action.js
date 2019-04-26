import api from "../utils/api";

export const actionType = {
  keywordSearch: "KEYWORD_SEARCH"
};

export function getKeywordSearch() {
  return dispatch => {
    api
      .keywordSearchApi()
      .then(keywordSearch =>
        dispatch({ type: actionType.keywordSearch, keywordSearch })
      );
  };
}
