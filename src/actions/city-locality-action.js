import api from "../utils/api";

export const actionType = {
  cityLocality: "CITY_LOCALITY"
};

export function cityLocality() {
  return dispatch => {
    api
      .cityLocalityApi()
      .then(cityLocality =>
        dispatch({ type: actionType.cityLocality, cityLocality })
      );
  };
}
