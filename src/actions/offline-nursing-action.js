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
  addCharge,
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
        addCharge,
        address
      )
      .then(offlineNursing =>
        dispatch({ type: actionType.offlineNursing, offlineNursing })
      );
  };
}
