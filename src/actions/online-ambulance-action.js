import api from "../utils/api";

export const actionType = {
  onlineAmbulance: "ONLINE_AMBULANCE"
};

export function postOnlineAmbulance(
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
  toAddress,
  paymentId
) {
  return dispatch => {
    api
      .onlineAmbulanceApi(
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
        toAddress,
        paymentId
      )
      .then(onlineAmbulance =>
        dispatch({ type: actionType.onlineAmbulance, onlineAmbulance })
      );
  };
}
