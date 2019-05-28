import api from "../utils/api";

export const actionType = {
  onlineEquipment: "ONLINE_EQUIPMENT"
};

export function postOnlineEquipment(
  customerId,
  firstName,
  lastName,
  email,
  mobile,
  partnerId,
  equipmentId,
  bookingFromDate,
  bookingToDate,
  amount,
  paymentId,
  addCharge,
  address
) {
  return dispatch => {
    api
      .onlineEquipmentApi(
        customerId,
        firstName,
        lastName,
        email,
        mobile,
        partnerId,
        equipmentId,
        bookingFromDate,
        bookingToDate,
        amount,
        paymentId,
        addCharge,
        address
      )
      .then(onlineEquipment =>
        dispatch({ type: actionType.onlineEquipment, onlineEquipment })
      );
  };
}
