import api from "../utils/api";

export const actionType = {
  onlineAppointment: "ONLINE_APPOINTMENT"
};

export function postOnlineAppointment(
  customerId,
  firstName,
  lastName,
  email,
  mobile,
  partnerId,
  departmentId,
  amount,
  paymentId,
  bookingDate,
  bookingTime
) {
  return dispatch => {
    api
      .onlineAppointmentApi(
        customerId,
        firstName,
        lastName,
        email,
        mobile,
        partnerId,
        departmentId,
        amount,
        paymentId,
        bookingDate,
        bookingTime
      )
      .then(onlineAppointment =>
        dispatch({ type: actionType.onlineAppointment, onlineAppointment })
      );
  };
}
