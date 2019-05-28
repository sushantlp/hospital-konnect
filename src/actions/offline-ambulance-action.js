import api from "../utils/api";

export const actionType = {
  offlineAmbulance: "OFFLINE_AMBULANCE"
};

export function postOfflineAmbulance(
  customerId,
  firstName,
  lastName,
  email,
  mobile,
  partnerId,
  ambulanceId,
  bookingDate,
  bookingTime,
  amount,
  complimentary,
  addCharge,
  fromAddress,
  toAddress
) {
  return dispatch => {
    api
      .offlineAmbulanceApi(
        customerId,
        firstName,
        lastName,
        email,
        mobile,
        partnerId,
        ambulanceId,
        bookingDate,
        bookingTime,
        amount,
        complimentary,
        addCharge,
        fromAddress,
        toAddress
      )
      .then(offlineAmbulance =>
        dispatch({ type: actionType.offlineAmbulance, offlineAmbulance })
      );
  };
}
