import api from "../utils/api";

export const actionType = {
  offlineBed: "OFFLINE_BED"
};

export function postOfflineBed(
  customerId,
  firstName,
  lastName,
  email,
  mobile,
  partnerId,
  bedId,
  amount,
  bookingFromDate,
  bookingToDate,
  referralPartnerId
) {
  return dispatch => {
    api
      .offlineBedApi(
        customerId,
        firstName,
        lastName,
        email,
        mobile,
        partnerId,
        bedId,
        amount,
        bookingFromDate,
        bookingToDate,
        referralPartnerId
      )
      .then(offlineBed =>
        dispatch({ type: actionType.offlineBed, offlineBed })
      );
  };
}
