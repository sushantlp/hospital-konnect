import api from "../utils/api";

export const actionType = {
  onlineNursing: "ONLINE_NURSING"
};

export function postOnlineNursing(
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
  paymentId,
  address
) {
  return dispatch => {
    api
      .onlineNursingApi(
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
        paymentId,
        address
      )
      .then(onlineNursing =>
        dispatch({ type: actionType.onlineNursing, onlineNursing })
      );
  };
}
