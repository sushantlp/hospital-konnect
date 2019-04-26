import getQueryString from "./paramParser";

const host = "https://hbo-ajayballyhoo.c9users.io/";

export default {
  cityLocalityApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/web/city-localities").then(response => {
        response.json().then(cityLocality => resolve(cityLocality));
      });
    });
  },
  categoryDetailApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/web/index").then(response => {
        response.json().then(categoryDetail => resolve(categoryDetail));
      });
    });
  },

  homeDetailApi: cityId => {
    return new Promise((resolve, reject) => {
      fetch(host + `api/v1/web/city/${cityId}/home`).then(response => {
        response.json().then(homeDetail => resolve(homeDetail));
      });
    });
  },

  wallImageApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/web/static").then(response => {
        response.json().then(wallImage => resolve(wallImage));
      });
    });
  },

  keywordSearchApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/web/search-keys").then(response => {
        response.json().then(keywordSearch => resolve(keywordSearch));
      });
    });
  }
};
