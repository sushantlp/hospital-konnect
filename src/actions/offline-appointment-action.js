import api from "../utils/api";

export const actionType = {
  offlineAppointment: "OFFLINE_APPOINTMENT"
};

export function postOfflineAppointment(
  customerId,
  firstName,
  lastName,
  email,
  mobile,
  partnerId,
  departmentId,
  amount,
  bookingDate,
  bookingTime
) {
  return dispatch => {
    api
      .offlineAppointmentApi(
        customerId,
        firstName,
        lastName,
        email,
        mobile,
        partnerId,
        departmentId,
        amount,
        bookingDate,
        bookingTime
      )
      .then(offlineAppointment =>
        dispatch({ type: actionType.offlineAppointment, offlineAppointment })
      );
  };
}
