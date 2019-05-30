import api from "../utils/api";

export const actionType = {
  wallImage: "WALL_IMAGE"
};

export function getWallImage() {
  return dispatch => {
    api
      .wallImageApi()
      .then(wallImage => dispatch({ type: actionType.wallImage, wallImage }));
  };
}
