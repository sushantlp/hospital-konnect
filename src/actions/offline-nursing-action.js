import api from "../utils/api";

export const actionType = {
  offlineNursing: "OFFLINE_NURSING"
};

export function postOfflineNursing(
  customerId,
  firstName,
  lastName,
  email,
  mobile,
  partnerId,
  nursingId,
  bookingFromDate,
  bookingToDate,
  amount,
  address
) {
  return dispatch => {
    api
      .offlineNursingApi(
        customerId,
        firstName,
        lastName,
        email,
        mobile,
        partnerId,
        nursingId,
        bookingFromDate,
        bookingToDate,
        amount,
        address
      )
      .then(offlineNursing =>
        dispatch({ type: actionType.offlineNursing, offlineNursing })
      );
  };
}
