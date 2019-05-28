import api from "../utils/api";

export const actionType = {
  offlineEquipment: "OFFLINE_EQUIPMENT"
};

export function postOfflineEquipment(
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
  addCharge,
  address
) {
  return dispatch => {
    api
      .offlineEquipmentApi(
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
        addCharge,
        address
      )
      .then(offlineEquipment =>
        dispatch({ type: actionType.offlineEquipment, offlineEquipment })
      );
  };
}
