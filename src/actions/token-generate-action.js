import api from "../utils/api";

export const actionType = {
  tokenGenerate: "REFERRAL_BED"
};

export function getTokenGenerate(username, password, role) {
  return dispatch => {
    api
      .tokenGenerateApi(username, password, role)
      .then(tokenGenerate =>
        dispatch({ type: actionType.tokenGenerate, tokenGenerate })
      );
  };
}
