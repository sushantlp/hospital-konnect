import React from "react";
import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import RightSide from "../rightSideComponent";
import LeftSide from "../leftSideComponent";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

import moment from "moment-timezone";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import constant from "../../utils/constant";

import "./package-booking.css";

export default class PackageBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("HH:mm"),
      from_date: new Date(),
      to_date: new Date(),
      auth_data: {},
      all_data: {},
      package_data: {},
      referral_partner_id: 0,
      c_email: "",
      c_fname: "",
      c_mobile: "",
      c_lname: "",
      mobileError: false,
      emailError: false,
      fNameError: false,
      lNameError: false,
      loading: false,
      payment: "PAY_ONLINE",
      right_charge: 0,
      default_charge: 0,
      hospital_bed: false,
      hospital_ambulance: false,
      whichPackage: undefined,
      packageName: undefined,
      category_id: 0,

      charge_apply: [],
      current_address: {},
      destination_address: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.onlineBed !== nextProps.onlineBed) {
      if (nextProps.onlineBed.status === "SUCCESS") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.success("Successful", "Successful");

        this.props.history.push("/web/");
      } else if (nextProps.onlineBed.status === "FAIL") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.error("Something wrong our side", "Error");
      }
    } else if (this.props.offlineBed !== nextProps.offlineBed) {
      if (nextProps.offlineBed.status === "SUCCESS") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.success("Successful", "Successful");

        this.props.history.push("/web/");
      } else if (nextProps.offlineBed.status === "FAIL") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.error("Something wrong our side", "Error");
      }
    } else if (this.props.onlineAmbulance !== nextProps.onlineAmbulance) {
      if (nextProps.onlineAmbulance.status === "SUCCESS") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.success("Successful", "Successful");

        this.props.history.push("/web/");
      } else if (nextProps.onlineAmbulance.status === "FAIL") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.error("Something wrong our side", "Error");
      }
    } else if (this.props.offlineAmbulance !== nextProps.offlineAmbulance) {
      if (nextProps.offlineAmbulance.status === "SUCCESS") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.success("Successful", "Successful");

        this.props.history.push("/web/");
      } else if (nextProps.offlineAmbulance.status === "FAIL") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.error("Something wrong our side", "Error");
      }
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);

    const profileData = sessionStorage.getItem("PROFILE_DATA");
    const authData = sessionStorage.getItem("AUTH_DATA");
    const allData = sessionStorage.getItem("ALL_DATA");
    const packageData = sessionStorage.getItem("PACKAGE_DATA");
    const referralBed = sessionStorage.getItem("REFERRAL_BED");

    const currentAddress = sessionStorage.getItem("CURRENT_ADDRESS");
    const destinationAddress = sessionStorage.getItem("DESTINATION_ADDRESS");

    if (currentAddress !== null)
      this.updateCurrentAddress(JSON.parse(currentAddress));
    if (destinationAddress !== null)
      this.updateDestinationAddress(JSON.parse(destinationAddress));

    this.updateProfileState(JSON.parse(profileData));
    this.updateAuthDataState(JSON.parse(authData));
    this.updateAllDataState(JSON.parse(allData));
    this.updateReferralBed(JSON.parse(referralBed));

    this.checkType(JSON.parse(allData), JSON.parse(packageData));
  }

  checkType = (all, packages) => {
    if (all.p_cat === 1) {
      if (packages.a_title !== undefined) {
        const charge = this.calculateAdditionalCharge(
          packages.a_price,
          packages.a_add_charges
        );

        this.setState({
          hospital_ambulance: true,
          right_charge: charge,
          default_charge: packages.a_price,
          whichPackage: "Selected Ambulance",
          packageName: packages.a_title,
          category_id: all.p_cat,
          package_data: packages
        });
      } else {
        this.setState({
          hospital_bed: true,
          right_charge: packages.b_price,
          default_charge: packages.b_price,
          whichPackage: "Selected Bed",
          packageName: packages.b_title,
          category_id: all.p_cat,
          package_data: packages
        });
      }
    } else if (all.p_cat === 2) {
      const charge = this.calculateAdditionalCharge(
        packages.a_price,
        packages.a_add_charges
      );

      this.setState({
        right_charge: charge,
        default_charge: packages.a_price,
        whichPackage: "Selected Ambulance",
        packageName: packages.a_title,
        category_id: all.p_cat,
        package_data: packages
      });
    } else if (all.p_cat === 3) {
      let charge = this.calculateAdditionalCharge(
        packages.e_price,
        packages.e_add_charges
      );

      this.setState({
        right_charge: charge + parseFloat(packages.e_deposit),
        default_charge: packages.e_price,
        whichPackage: "Selected Equiment",
        packageName: packages.e_title,
        category_id: all.p_cat,
        package_data: packages
      });
    } else if (all.p_cat === 4) {
      this.setState({
        right_charge: parseFloat(packages.pac_price),
        default_charge: packages.pac_price,
        whichPackage: "Selected Nursing Package",
        packageName: packages.pac_title,
        category_id: all.p_cat,
        package_data: packages
      });
    }
  };

  updateCurrentAddress = address => {
    const current = {
      address_line_1: address.address_one,
      address_line_2: address.address_two,
      landmark: address.landmark,
      city_id: address.city_id,
      locality_id: address.locality_id
    };

    this.setState({
      current_address: current
    });
  };

  updateDestinationAddress = address => {
    const destination = {
      address_line_1: address.address_one,
      address_line_2: address.address_two,
      landmark: address.landmark,
      city_id: address.city_id,
      locality_id: address.locality_id
    };

    this.setState({
      destination_address: destination
    });
  };

  calculateAdditionalCharge = (price, charges) => {
    let value = 0;
    let percent = 0;

    const apply = charges.map((charge, index) => {
      if (charge.type === 1)
        value = parseFloat(value) + parseFloat(charge.value);
      else percent = parseFloat(percent) + parseFloat(charge.value);

      return charge.charge_id;
    });
    console.log(apply);
    this.setState({
      charge_apply: apply
    });

    if (percent !== 0) {
      const percentPrice = (price * percent) / 100;

      return parseFloat(price) + parseFloat(percentPrice) + parseFloat(value);
    } else return parseFloat(price) + parseFloat(value);
  };

  updateReferralBed = id => {
    if (id === null) id = 0;
    this.setState({
      referral_partner_id: id
    });
  };

  updateProfileState = profile => {
    this.setState({
      c_fname: profile.c_fname,
      c_lname: profile.c_lname,
      c_mobile: profile.c_mobile,
      c_email: profile.c_email
    });
  };

  updateRightCharge = right_charge => {
    this.setState({
      right_charge
    });
  };

  updateAuthDataState = auth_data => {
    this.setState({
      auth_data
    });
  };

  updateAllDataState = all_data => {
    this.setState({
      all_data
    });
  };

  onChangeFromDate = e => {
    this.setState({
      from_date: e
    });
    this.dateDifference(e, this.state.to_date);
  };

  onChangeToDate = e => {
    this.setState({
      to_date: e
    });

    if (this.state.all_data.p_cat === 1)
      this.dateDifference(this.state.from_date, e);
  };

  dateDifference = (from, to) => {
    from = moment(from).format("DD.MM.YYYY");
    to = moment(to).format("DD.MM.YYYY");

    const startDate = moment(from, "DD.MM.YYYY");
    const endDate = moment(to, "DD.MM.YYYY");

    const count = endDate.diff(startDate, "days");

    if (parseInt(count, 10) > 1)
      this.updateRightCharge(this.state.right_charge * parseInt(count, 10));
    else this.updateRightCharge(this.state.default_charge);
  };

  onChangeRadio = (e, name) => {
    this.setState({
      payment: name
    });
  };

  onChangeDropdown = departmentId => {
    this.setState({
      departmentId
    });
  };

  onChangeTime = time => {
    this.setState({
      time
    });
  };

  onChangeEmail = e => {
    if (this.state.emailError)
      this.setState({
        emailError: !this.state.emailError
      });

    if (e.target.value === "")
      this.setState({
        c_email: "",
        emailError: !this.state.emailError
      });
    else
      this.setState({
        c_email: e.target.value
      });
  };

  onChangeFirstName = e => {
    if (this.state.fNameError)
      this.setState({
        fNameError: !this.state.fNameError
      });

    if (e.target.value === "")
      this.setState({
        c_fname: "",
        fNameError: !this.state.fNameError
      });
    else
      this.setState({
        c_fname: e.target.value
      });
  };

  onChangeLastName = e => {
    if (this.state.lNameError)
      this.setState({
        lNameError: !this.state.lNameError
      });

    if (e.target.value === "")
      this.setState({
        c_lname: "",
        lNameError: !this.state.lNameError
      });
    else
      this.setState({
        c_lname: e.target.value
      });
  };

  onKeyPressMobile = e => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  };

  onChangeMobile = e => {
    if (this.state.mobileError)
      this.setState({
        c_mobile: !this.state.c_mobile
      });

    if (e.target.value === "")
      this.setState({
        c_mobile: "",
        mobileError: !this.state.mobileError
      });
    else
      this.setState({
        c_mobile: e.target.value
      });
  };

  onClickApi = () => {
    if (
      this.state.c_fname === "" ||
      this.state.c_lname === "" ||
      this.state.c_email === "" ||
      this.state.c_mobile === ""
    ) {
      if (this.state.c_fname === "")
        this.setState({
          fNameError: true
        });
      if (this.state.c_lname === "")
        this.setState({
          lNameError: true
        });
      if (this.state.c_email === "")
        this.setState({
          emailError: true
        });

      if (this.state.c_mobile === "")
        this.setState({
          mobileError: true
        });
    } else if (!constant.EMAIL_REG.test(this.state.c_email)) {
      this.setState({
        emailError: true
      });
    } else {
      this.setState({
        loading: !this.state.loading
      });

      const mobile = `91${this.state.c_mobile}`;
      const amount = this.state.right_charge * 100;
      if (this.state.category_id === 1) {
        const fromDate = moment(Date.parse(this.state.from_date)).format(
          "YYYY-MM-DD"
        );
        const toDate = moment(Date.parse(this.state.to_date)).format(
          "YYYY-MM-DD"
        );

        if (this.state.hospital_bed) {
          if (this.state.payment === "PAY_ONLINE")
            this.invokeRazorPay(
              this.state.c_email,
              this.state.c_mobile,
              amount,
              this.state.all_data.p_name,
              this.onlineBedApi
            );
          else
            this.props.postOfflineBed(
              this.state.auth_data.customer_id,
              this.state.c_fname,
              this.state.c_lname,
              this.state.c_email,
              mobile,
              this.state.all_data.p_id,
              this.state.package_data.b_id,
              amount,
              fromDate,
              toDate,
              this.state.referral_partner_id
            );
        } else {
          if (this.state.payment === "PAY_ONLINE")
            this.invokeRazorPay(
              this.state.c_email,
              this.state.c_mobile,
              amount,
              this.state.all_data.p_name,
              this.onlineAmbulanceApi
            );
          else
            this.props.postOfflineAmbulance(
              this.state.auth_data.customer_id,
              this.state.c_fname,
              this.state.c_lname,
              this.state.c_email,
              mobile,
              this.state.all_data.p_id,
              this.state.package_data.a_id,
              fromDate,
              this.state.time,
              amount,
              0,
              this.state.charge_apply,
              this.state.current_address,
              this.state.destination_address
            );
        }
      } else if (this.state.category_id === 2) {
        const fromDate = moment(Date.parse(this.state.from_date)).format(
          "YYYY-MM-DD"
        );

        if (this.state.payment === "PAY_ONLINE")
          this.invokeRazorPay(
            this.state.c_email,
            this.state.c_mobile,
            amount,
            this.state.all_data.p_name,
            this.onlineAmbulanceApi
          );
        else
          this.props.postOfflineAmbulance(
            this.state.auth_data.customer_id,
            this.state.c_fname,
            this.state.c_lname,
            this.state.c_email,
            mobile,
            this.state.all_data.p_id,
            this.state.package_data.a_id,
            fromDate,
            this.state.time,
            amount,
            0,
            this.state.charge_apply,
            this.state.current_address,
            this.state.destination_address
          );
      } else if (this.state.category_id === 3) {
        const fromDate = moment(Date.parse(this.state.from_date)).format(
          "YYYY-MM-DD"
        );
        const toDate = moment(Date.parse(this.state.to_date)).format(
          "YYYY-MM-DD"
        );

        if (this.state.payment === "PAY_ONLINE")
          this.invokeRazorPay(
            this.state.c_email,
            this.state.c_mobile,
            amount,
            this.state.all_data.p_name,
            this.onlineEquimentApi
          );
        else
          this.postOfflineEquipment(
            this.state.auth_data.customer_id,
            this.state.c_fname,
            this.state.c_lname,
            this.state.c_email,
            mobile,
            this.state.all_data.p_id,
            this.state.package_data.e_id,
            fromDate,
            toDate,
            amount,
            this.state.charge_apply,
            this.state.current_address
          );
      } else if (this.state.category_id === 4) {
        const fromDate = moment(Date.parse(this.state.from_date)).format(
          "YYYY-MM-DD"
        );
        const toDate = moment(Date.parse(this.state.to_date)).format(
          "YYYY-MM-DD"
        );

        if (this.state.payment === "PAY_ONLINE")
          this.invokeRazorPay(
            this.state.c_email,
            this.state.c_mobile,
            amount,
            this.state.all_data.p_name,
            this.onlineNursingApi
          );
        else
          this.postOfflineNursing(
            this.state.auth_data.customer_id,
            this.state.c_fname,
            this.state.c_lname,
            this.state.c_email,
            mobile,
            this.state.all_data.p_id,
            this.state.package_data.pac_id,
            fromDate,
            toDate,
            amount,
            this.state.current_address
          );
      }
    }
  };

  onlineNursingApi = (paymentId, promises) => {
    const mobile = `91${this.state.c_mobile}`;
    const amount = this.state.right_charge * 100;
    const fromDate = moment(Date.parse(this.state.from_date)).format(
      "YYYY-MM-DD"
    );
    const toDate = moment(Date.parse(this.state.to_date)).format("YYYY-MM-DD");

    if (promises) {
      this.postOnlineNursing(
        this.state.auth_data.customer_id,
        this.state.c_fname,
        this.state.c_lname,
        this.state.c_email,
        mobile,
        this.state.all_data.p_id,
        this.state.package_data.pac_id,
        fromDate,
        toDate,
        amount,
        paymentId,
        this.state.current_address
      );
    } else console.log("Payment not done");
  };

  onlineEquimentApi = (paymentId, promises) => {
    const mobile = `91${this.state.c_mobile}`;
    const amount = this.state.right_charge * 100;
    const fromDate = moment(Date.parse(this.state.from_date)).format(
      "YYYY-MM-DD"
    );
    const toDate = moment(Date.parse(this.state.to_date)).format("YYYY-MM-DD");

    if (promises) {
      this.props.postOnlineEquipment(
        this.state.auth_data.customer_id,
        this.state.c_fname,
        this.state.c_lname,
        this.state.c_email,
        mobile,
        this.state.all_data.p_id,
        this.state.package_data.e_id,
        fromDate,
        toDate,
        amount,
        paymentId,
        this.state.charge_apply,
        this.state.current_address
      );
    } else console.log("Payment not done");
  };

  onlineAmbulanceApi = (paymentId, promises) => {
    const mobile = `91${this.state.c_mobile}`;
    const amount = this.state.right_charge * 100;
    const fromDate = moment(Date.parse(this.state.from_date)).format(
      "YYYY-MM-DD"
    );
    let complimentary = 0;

    // if (this.state.category_id === 1)
    //   complimentary = this.state.package_data.a_complimentary;
    if (promises) {
      this.props.postOnlineAmbulance(
        this.state.auth_data.customer_id,
        this.state.c_fname,
        this.state.c_lname,
        this.state.c_email,
        mobile,
        this.state.all_data.p_id,
        this.state.package_data.a_id,
        fromDate,
        this.state.time,
        amount,
        complimentary,
        this.state.charge_apply,
        this.state.current_address,
        this.state.destination_address,
        paymentId
      );
    } else console.log("Payment not done");
  };

  onlineBedApi = (paymentId, promises) => {
    const mobile = `91${this.state.c_mobile}`;
    const amount = this.state.right_charge * 100;
    const fromDate = moment(Date.parse(this.state.from_date)).format(
      "YYYY-MM-DD"
    );
    const toDate = moment(Date.parse(this.state.to_date)).format("YYYY-MM-DD");

    if (promises) {
      this.props.postOnlineBed(
        this.state.auth_data.customer_id,
        this.state.c_fname,
        this.state.c_lname,
        this.state.c_email,
        mobile,
        this.state.all_data.p_id,
        this.state.package_data.b_id,
        amount,
        paymentId,
        fromDate,
        toDate,
        this.state.referral_partner_id
      );
    } else console.log("Payment not done");
  };

  invokeRazorPay = (email, mobile, amount, name, callBackApi) => {
    const options = {
      key: "rzp_test_XNKKob8Iy77wXR",
      amount: amount, // 2000 paise = INR 20
      name: name,
      description: "Booking",
      image:
        "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_50/v1539007601/ballyhoo/EMAIL/ballyhoo_black.png",
      handler: function(response) {
        callBackApi(response.razorpay_payment_id, true);
      },
      modal: {
        ondismiss: function() {
          callBackApi(undefined, false);
        }
      },
      prefill: {
        // name: userName,
        email: email,
        contact: mobile
      },
      notes: {
        address: ""
      },
      theme: {
        color: "#F37254"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  render() {
    let rightSpeciality = undefined;
    const leftHeaderName = "Confirm Booking";
    const leftDepartment = [];
    const rightHeader = this.state.all_data.p_name;
    const thumbImage =
      this.state.all_data.p_image_thumb === undefined
        ? this.state.all_data.p_logo
        : this.state.all_data.p_image_thumb;

    const rightAddress =
      this.state.all_data.p_locality === undefined
        ? `${this.state.all_data.p_address.locality},  ${
            this.state.all_data.p_address.city
          }`
        : this.state.all_data.p_locality;

    return (
      <React.Fragment>
        <Header />
        <section class="section">
          <div class="container">
            <div class="columns">
              <div class="column">
                <RightSide
                  rightHeader={rightHeader}
                  rightSpeciality={rightSpeciality}
                  rightAddress={rightAddress}
                  rightCharge={this.state.right_charge}
                  thumbImage={thumbImage}
                  whichPackage={this.state.whichPackage}
                  packageName={this.state.packageName}
                  feeTitle="Booking price :"
                />
                <section class="section">
                  <DatePicker
                    onChange={event => this.onChangeFromDate(event)}
                    value={this.state.from_date}
                  />
                  {this.state.hospital_bed ||
                  this.state.all_data.p_cat === 3 ||
                  this.state.all_data.p_cat === 4 ? (
                    <span style={{ float: "right" }}>
                      <DatePicker
                        onChange={event => this.onChangeToDate(event)}
                        value={this.state.to_date}
                      />
                    </span>
                  ) : null}

                  {this.state.hospital_bed ||
                  this.state.all_data.p_cat === 3 ||
                  this.state.all_data.p_cat === 4 ? null : (
                    <TimePicker
                      onChange={event => this.onChangeTime(event)}
                      value={this.state.time}
                    />
                  )}
                </section>
              </div>
              <div class="column ">
                <LeftSide
                  state={this.state}
                  leftHeaderName={leftHeaderName}
                  department={leftDepartment}
                  onChangeRadio={this.onChangeRadio}
                  onChangeDropdown={this.onChangeDropdown}
                  onChangeEmail={this.onChangeEmail}
                  onChangeFirstName={this.onChangeFirstName}
                  onChangeLastName={this.onChangeLastName}
                  onChangeMobile={this.onChangeMobile}
                  onKeyPressMobile={this.onKeyPressMobile}
                  onClickApi={this.onClickApi}
                />
              </div>
            </div>
          </div>
        </section>

        <NotificationContainer />
        <Footer />
      </React.Fragment>
    );
  }
}
