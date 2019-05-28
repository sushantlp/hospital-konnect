import api from "../utils/api";

export const actionType = {
  ambulanceDistance: "AMBULANCE_DISTANCE"
};

export function getambulanceDistance(
  partnerId,
  ambulanceId,
  currentAddress,
  destinationAddress
) {
  return dispatch => {
    api
      .ambulanceDistanceApi(
        partnerId,
        ambulanceId,
        currentAddress,
        destinationAddress
      )
      .then(ambulanceDistance =>
        dispatch({ type: actionType.ambulanceDistance, ambulanceDistance })
      );
  };
}
