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

import "react-notifications/lib/notifications.css";
import "./appointment.css";

export default class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("HH:mm"),
      firstDate: new Date(),

      auth_data: {},
      all_data: {},
      c_email: "",
      c_fname: "",
      c_mobile: "",
      c_lname: "",
      mobileError: false,
      emailError: false,
      fNameError: false,
      lNameError: false,
      loading: false,
      departmentId: 0,
      payment: "PAY_ONLINE"
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);

    const profileData = sessionStorage.getItem("PROFILE_DATA");
    const authData = sessionStorage.getItem("AUTH_DATA");
    const allData = sessionStorage.getItem("ALL_DATA");

    this.updateProfileState(JSON.parse(profileData));
    this.updateAuthDataState(JSON.parse(authData));
    this.updateAllDataState(JSON.parse(allData));
    this.initialDepartment(JSON.parse(allData), JSON.parse(authData));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.offlineAppointment !== nextProps.offlineAppointment) {
      if (nextProps.offlineAppointment.status === "SUCCESS") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.success("Successful", "Successful");

        this.props.history.push("/web/");
      } else if (nextProps.offlineAppointment.status === "FAIL") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.error("Something wrong our side", "Error");
      }
    } else if (this.props.onlineAppointment !== nextProps.onlineAppointment) {
      if (nextProps.onlineAppointment.status === "SUCCESS") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.success("Successful", "Successful");
      } else if (nextProps.onlineAppointment.status === "FAIL") {
        this.setState({
          loading: !this.state.loading
        });

        NotificationManager.error("Something wrong our side", "Error");
      }
    }
  }

  updateProfileState = profile => {
    this.setState({
      c_fname: profile.c_fname,
      c_lname: profile.c_lname,
      c_mobile: profile.c_mobile,
      c_email: profile.c_email
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

  onChangeTime = time => {
    this.setState({
      time
    });
  };

  onChangeDate = e => {
    this.setState({
      firstDate: e
    });
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

  initialDepartment = (allData, authData) => {
    if (authData.type === "APPOINTMENT")
      if (allData.p_departments.length !== 0)
        this.onChangeDropdown(allData.p_departments[0].dep_id);
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
      const amount = this.state.all_data.p_reg_charge * 100;
      const date = moment(Date.parse(this.state.firstDate)).format(
        "YYYY-MM-DD"
      );

      if (this.state.payment === "PAY_ONLINE")
        this.invokeRazorPay(
          this.state.c_email,
          this.state.c_mobile,
          amount,
          this.state.all_data.p_name,
          this.onlinePaymentApi
        );
      else
        this.props.postOfflineAppointment(
          this.state.auth_data.customer_id,
          this.state.c_fname,
          this.state.c_lname,
          this.state.c_email,
          mobile,
          this.state.all_data.p_id,
          this.state.departmentId,
          amount,
          date,
          this.state.time
        );
    }
  };

  onlinePaymentApi = (paymentId, promises) => {
    const mobile = `91${this.state.c_mobile}`;
    const amount = this.state.all_data.p_reg_charge * 100;
    const date = moment(Date.parse(this.state.firstDate)).format("YYYY-MM-DD");

    if (promises)
      this.props.postOnlineAppointment(
        this.state.auth_data.customer_id,
        this.state.c_fname,
        this.state.c_lname,
        this.state.c_email,
        mobile,
        this.state.all_data.p_id,
        this.state.departmentId,
        amount,
        paymentId,
        date,
        this.state.time
      );
    else console.log("Payment not done");
  };

  invokeRazorPay = (email, mobile, amount, name, onlinePaymentApi) => {
    console.log("Invoke");
    const options = {
      key: "rzp_test_XNKKob8Iy77wXR",
      amount: amount, // 2000 paise = INR 20
      name: name,
      description: "Booking",
      image:
        "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_50/v1539007601/ballyhoo/EMAIL/ballyhoo_black.png",
      handler: function(response) {
        onlinePaymentApi(response.razorpay_payment_id, true);
      },
      modal: {
        ondismiss: function() {
          onlinePaymentApi(undefined, false);
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
    const leftHeaderName =
      this.state.auth_data.type === "APPOINTMENT"
        ? "Confirm Appointment"
        : "Confirm Booking";

    const leftDepartment =
      this.state.auth_data.type === "APPOINTMENT"
        ? this.state.all_data.p_departments
        : [];

    const rightHeader = this.state.all_data.p_name;
    const rightCharge = this.state.all_data.p_reg_charge;

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

    this.state.all_data.p_specialities.map((special, index) => {
      rightSpeciality =
        rightSpeciality === undefined
          ? special.spl_name
          : `${rightSpeciality} | ${special.spl_name}`;
    });

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
                  rightCharge={rightCharge}
                  thumbImage={thumbImage}
                  feeTitle="Consultation fees :"
                />
                <section class="section">
                  <DatePicker
                    onChange={event => this.onChangeDate(event)}
                    value={this.state.firstDate}
                  />
                  <TimePicker
                    onChange={event => this.onChangeTime(event)}
                    value={this.state.time}
                  />
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
