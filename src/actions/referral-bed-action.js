import api from "../utils/api";

export const actionType = {
  referralBed: "REFERRAL_BED"
};

export function validateReferralBed(key) {
  return dispatch => {
    api
      .referralBedApi(key)
      .then(referralBed =>
        dispatch({ type: actionType.referralBed, referralBed })
      );
  };
}
