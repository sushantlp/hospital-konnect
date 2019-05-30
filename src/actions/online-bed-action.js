import api from "../utils/api";

export const actionType = {
  onlineBed: "ONLINE_BED"
};

export function postOnlineBed(
  customerId,
  firstName,
  lastName,
  email,
  mobile,
  partnerId,
  bedId,
  amount,
  paymentId,
  bookingFromDate,
  bookingToDate,
  referralPartnerId
) {
  return dispatch => {
    api
      .onlineBedApi(
        customerId,
        firstName,
        lastName,
        email,
        mobile,
        partnerId,
        bedId,
        amount,
        paymentId,
        bookingFromDate,
        bookingToDate,
        referralPartnerId
      )
      .then(onlineBed => dispatch({ type: actionType.onlineBed, onlineBed }));
  };
}
