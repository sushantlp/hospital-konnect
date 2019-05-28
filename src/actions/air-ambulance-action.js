import api from "../utils/api";

export const actionType = {
  airAmbulance: "AIR_AMBULANCE"
};

export function postAirAmbulance(firstName, lastName, email, mobile, enquiry) {
  return dispatch => {
    api
      .airAmbulanceApi(firstName, lastName, email, mobile, enquiry)
      .then(airAmbulance =>
        dispatch({ type: actionType.airAmbulance, airAmbulance })
      );
  };
}
