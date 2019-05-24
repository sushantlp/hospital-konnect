import api from "../utils/api";

export const actionType = {
  tokenGenerate: "TOKEN_GENERATE"
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
