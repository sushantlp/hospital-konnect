import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import RightSide from "../rightSideComponent";
import LeftSide from "../leftSideComponent";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import moment from "moment-timezone";

import constant from "../../utils/constant";

import "./appointment.css";

export default class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("HH:mm"),
      firstDate: new Date(),
      lastDate: new Date(),
      parseFirstDate: new Date(),
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
      departmentId: 0
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
  }

  componentWillReceiveProps(nextProps) {}

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
    const parse = moment(Date.parse(e)).format("YYYY-MM-DD");
    this.setState({
      firstDate: e,
      parseFirstDate: parse
    });
  };

  onChangeRadio = (e, name) => {
    console.log(e);
    console.log(name);
  };

  onChangeDropdown = departmentId => {
    this.setState({
      departmentId
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
      this.state.c_email === ""
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
    } else if (!constant.EMAIL_REG.test(this.state.c_email)) {
      this.setState({
        emailError: true
      });
    } else {
      this.setState({
        loading: !this.state.loading
      });
    }
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
        <Footer />
      </React.Fragment>
    );
  }
}
