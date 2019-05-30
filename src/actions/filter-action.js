import api from "../utils/api";

export const actionType = {
  filterList: "FILTER_LIST"
};

export function getFilterList() {
  return dispatch => {
    api
      .filterListApi()
      .then(filterList =>
        dispatch({ type: actionType.filterList, filterList })
      );
  };
}
