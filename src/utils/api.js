import getQueryString from "./paramParser";

const host = "https://hbo-ajayballyhoo.c9users.io/";

export default {
  cityLocalityApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/web/city-localities")
        .then(response => {
          response
            .json()
            .then(cityLocality => resolve(cityLocality))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  categoryDetailApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/web/index")
        .then(response => {
          response
            .json()
            .then(categoryDetail => resolve(categoryDetail))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  homeDetailApi: cityId => {
    return new Promise((resolve, reject) => {
      fetch(host + `api/v1/web/city/${cityId}/home`)
        .then(response => {
          response
            .json()
            .then(homeDetail => resolve(homeDetail))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  wallImageApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/web/static")
        .then(response => {
          response
            .json()
            .then(wallImage => resolve(wallImage))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  keywordSearchApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/web/search-keys")
        .then(response => {
          response
            .json()
            .then(keywordSearch => resolve(keywordSearch))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  categoryListApi: (cityId, localityId, categoryId, type, page) => {
    console.log(cityId);
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/web/partners?" +
          getQueryString({
            city: cityId,
            locality: localityId,
            q_id: categoryId,
            type: type,
            page: page
          })
      )
        .then(response => {
          response
            .json()
            .then(categoryList => resolve(categoryList))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  }
};
