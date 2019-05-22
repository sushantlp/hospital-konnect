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
      fetch(
        host +
          "api/v1/web/home?" +
          getQueryString({
            city_id: cityId
          })
      )
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

  keywordSearchApi: cityId => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/web/search-keys?" +
          getQueryString({
            city_id: cityId
          })
      )
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
  },

  categoryFeatureApi: partnerId => {
    return new Promise((resolve, reject) => {
      fetch(host + `api/v1/web/partners/${partnerId}`)
        .then(response => {
          response
            .json()
            .then(categoryFeature => resolve(categoryFeature))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  filterListApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + `api/v1/web/filters`)
        .then(response => {
          response
            .json()
            .then(filterList => resolve(filterList))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  sideBarApi: categoryId => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/web/list/side-bar?" +
          getQueryString({
            cat_id: categoryId
          })
      )
        .then(response => {
          response
            .json()
            .then(sideBarList => resolve(sideBarList))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  seoUrlApi: partnerId => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/web/seo-links?" +
          getQueryString({
            p_id: partnerId
          })
      )
        .then(response => {
          response
            .json()
            .then(seoUrlList => resolve(seoUrlList))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  mobileRegisterApi: mobile => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/web/signin?" +
          getQueryString({
            mobile: mobile
          })
      )
        .then(response => {
          response
            .json()
            .then(mobileRegister => resolve(mobileRegister))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  otpVerifyApi: (mobile, otp) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/web/verify/otp?" +
          getQueryString({
            mobile: mobile,
            otp: otp
          })
      )
        .then(response => {
          response
            .json()
            .then(otpVerify => resolve(otpVerify))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  readProfileDetailApi: customerId => {
    return new Promise((resolve, reject) => {
      fetch(
        `${host} 
          api/v1/web/customers/${customerId}`
      )
        .then(response => {
          response
            .json()
            .then(readProfile => resolve(readProfile))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  writeProfileDetailApi: (customerId, firstName, lastName, email) => {
    return new Promise((resolve, reject) => {
      fetch(
        `${host} 
          api/v1/web/update/customers/${customerId}` +
          getQueryString({
            fname: firstName,
            lname: lastName,
            email: email
          }),
        {
          method: "GET"
        }
      )
        .then(response => {
          response
            .json()
            .then(writeProfile => resolve(writeProfile))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  referralBedApi: key => {
    return new Promise((resolve, reject) => {
      fetch(
        `${host} 
          api/v1/web/apply/referral` +
          getQueryString({
            referral_key: key
          }),
        {
          method: "GET"
        }
      )
        .then(response => {
          response
            .json()
            .then(referralBed => resolve(referralBed))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  tokenGenerateApi: (username, password, role) => {
    return new Promise((resolve, reject) => {
      fetch(
        `${host} 
          api/v1/web/token?` +
          getQueryString({
            username: username,
            password: password,
            role: role
          })
      )
        .then(response => {
          response
            .json()
            .then(tokenGenerate => resolve(tokenGenerate))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  }
};
