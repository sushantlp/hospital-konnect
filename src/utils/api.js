import getQueryString from "./paramParser";

// const host = "https://hbo-ajayballyhoo.c9users.io/";
const host = "https://solontech.in/orxNu3Vt5vQL/hospital-konnect/";

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
      fetch(`${host}api/v1/web/customers/${customerId}`)
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
        `${host}api/v1/web/update/customers/${customerId}?` +
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
        `${host}api/v1/web/apply/referral?` +
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
        `${host}api/v1/web/token?` +
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
  },

  onlineAppointmentApi: (
    customerId,
    firstName,
    lastName,
    email,
    mobile,
    partnerId,
    departmentId,
    amount,
    paymentId,
    bookingDate,
    bookingTime
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/hospital/appointments/online`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          dep_id: departmentId,
          amount: amount,
          online_payment_id: paymentId,
          book_date: bookingDate,
          book_time: bookingTime
        })
      })
        .then(response => {
          response
            .json()
            .then(onlineAppointment => resolve(onlineAppointment))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  offlineAppointmentApi: (
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
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/hospital/appointments/pav`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          dep_id: departmentId,
          amount: amount,
          book_date: bookingDate,
          book_time: bookingTime
        })
      })
        .then(response => {
          response
            .json()
            .then(offlineAppointment => resolve(offlineAppointment))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  onlineBedApi: (
    customerId,
    firstName,
    lastName,
    email,
    mobile,
    partnerId,
    bedId,
    amount,
    paymentId,
    bookingFromDate,
    bookingToDate,
    referralPartnerId
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/beds/online`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          bed_id: bedId,
          amount: amount,
          book_from_date: bookingFromDate,
          book_to_date: bookingToDate,
          referral_partner_id: referralPartnerId,
          online_payment_id: paymentId
        })
      })
        .then(response => {
          response
            .json()
            .then(onlineBed => resolve(onlineBed))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  offlineBedApi: (
    customerId,
    firstName,
    lastName,
    email,
    mobile,
    partnerId,
    bedId,
    amount,
    bookingFromDate,
    bookingToDate,
    referralPartnerId
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/beds/pav`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          bed_id: bedId,
          amount: amount,
          book_from_date: bookingFromDate,
          book_to_date: bookingToDate,
          referral_partner_id: referralPartnerId
        })
      })
        .then(response => {
          response
            .json()
            .then(onlineBed => resolve(onlineBed))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  ambulanceDistanceApi: (
    partnerId,
    ambulanceId,
    currentAddress,
    destinationAddress
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/calculate/ambulance/amount`, {
        method: "POST",
        body: JSON.stringify({
          p_id: partnerId,
          amb_id: ambulanceId,
          from_address: currentAddress,
          to_address: destinationAddress
        })
      })
        .then(response => {
          response
            .json()
            .then(ambulanceDistance => resolve(ambulanceDistance))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  onlineAmbulanceApi: (
    customerId,
    firstName,
    lastName,
    email,
    mobile,
    partnerId,
    ambulanceId,
    bookingDate,
    bookingTime,
    amount,
    complimentary,
    addCharge,
    fromAddress,
    toAddress,
    paymentId
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/ambulances/online`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          amb_id: ambulanceId,
          book_date: bookingDate,
          book_time: bookingTime,
          amount: amount,
          complimentary: complimentary,
          add_charges: addCharge,
          c_from_address: fromAddress,
          c_to_address: toAddress,
          online_payment_id: paymentId
        })
      })
        .then(response => {
          response
            .json()
            .then(onlineAmbulance => resolve(onlineAmbulance))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  offlineAmbulanceApi: (
    customerId,
    firstName,
    lastName,
    email,
    mobile,
    partnerId,
    ambulanceId,
    bookingDate,
    bookingTime,
    amount,
    complimentary,
    addCharge,
    fromAddress,
    toAddress
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/ambulances/pav`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          amb_id: ambulanceId,
          book_date: bookingDate,
          book_time: bookingTime,
          amount: amount,
          complimentary: complimentary,
          add_charges: addCharge,
          c_from_address: fromAddress,
          c_to_address: toAddress
        })
      })
        .then(response => {
          response
            .json()
            .then(offlineAmbulance => resolve(offlineAmbulance))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  onlineEquipmentApi: (
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
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/equipments/online`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          equip_id: equipmentId,
          book_from_date: bookingFromDate,
          book_to_date: bookingToDate,
          amount: amount,
          online_payment_id: paymentId,
          add_charges: addCharge,
          c_address: address
        })
      })
        .then(response => {
          response
            .json()
            .then(onlineEquipment => resolve(onlineEquipment))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  offlineEquipmentApi: (
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
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/equipments/pav`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          equip_id: equipmentId,
          book_from_date: bookingFromDate,
          book_to_date: bookingToDate,
          amount: amount,
          add_charges: addCharge,
          c_address: address
        })
      })
        .then(response => {
          response
            .json()
            .then(offlineEquipment => resolve(offlineEquipment))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  offlineNursingApi: (
    customerId,
    firstName,
    lastName,
    email,
    mobile,
    partnerId,
    nursingId,
    bookingFromDate,
    bookingToDate,
    amount,
    address
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/packages/pav`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          pac_id: nursingId,
          book_from_date: bookingFromDate,
          book_to_date: bookingToDate,
          amount: amount,
          c_address: address
        })
      })
        .then(response => {
          response
            .json()
            .then(offlineNursing => resolve(offlineNursing))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  onlineNursingApi: (
    customerId,
    firstName,
    lastName,
    email,
    mobile,
    partnerId,
    nursingId,
    bookingFromDate,
    bookingToDate,
    amount,
    paymentId,
    address
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/book/packages/online`, {
        method: "POST",
        body: JSON.stringify({
          c_id: customerId,
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          p_id: partnerId,
          pac_id: nursingId,
          book_from_date: bookingFromDate,
          book_to_date: bookingToDate,
          amount: amount,
          online_payment_id: paymentId,
          c_address: address
        })
      })
        .then(response => {
          response
            .json()
            .then(offlineNursing => resolve(offlineNursing))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  airAmbulanceApi: (firstName, lastName, email, mobile, enquiry) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v1/web/calculate/ambulance/amount`, {
        method: "POST",
        body: JSON.stringify({
          c_fname: firstName,
          c_lname: lastName,
          c_email: email,
          c_mobile: mobile,
          enquiry: enquiry
        })
      })
        .then(response => {
          response
            .json()
            .then(airAmbulance => resolve(airAmbulance))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  }
};
