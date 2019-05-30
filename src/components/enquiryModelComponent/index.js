import React from "react";
import "./enquiry.css";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

export default class EnquiryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fNameError: false,
      lNameError: false,
      emailError: false,
      mobileError: false,
      enquiryError: false,

      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      enquiry: "",

      loading: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.airAmbulance !== nextProps.airAmbulance) {
      if (nextProps.airAmbulance.status === "SUCCESS") {
        this.updateLoadingState(false);

        NotificationManager.success("Successful", "Successful");

        setTimeout(() => {
          this.props.history.push("/web/");
        }, 3000);
      } else if (nextProps.airAmbulance.status === "FAIL") {
        this.updateLoadingState(false);

        NotificationManager.success("Successful", "Successful");

        setTimeout(() => {
          this.props.history.push("/web/");
        }, 3000);

        // NotificationManager.error("Something wrong our side", "Error");
      }
    }
  }

  onChangeFirstName = e => {
    if (this.state.fNameError)
      this.setState({
        fNameError: !this.state.fNameError
      });

    if (e.target.value === "")
      this.setState({
        first_name: "",
        fNameError: !this.state.fNameError
      });
    else
      this.setState({
        first_name: e.target.value
      });
  };

  onChangeLastName = e => {
    if (this.state.lNameError)
      this.setState({
        lNameError: !this.state.lNameError
      });

    if (e.target.value === "")
      this.setState({
        last_name: "",
        lNameError: !this.state.lNameError
      });
    else
      this.setState({
        last_name: e.target.value
      });
  };

  onChangeEmail = e => {
    if (this.state.emailError)
      this.setState({
        emailError: !this.state.emailError
      });

    if (e.target.value === "")
      this.setState({
        email: "",
        emailError: !this.state.emailError
      });
    else
      this.setState({
        email: e.target.value
      });
  };

  onChangeMobile = e => {
    if (this.state.mobileError)
      this.setState({
        mobileError: !this.state.mobileError
      });

    if (e.target.value === "")
      this.setState({
        mobile: "",
        mobileError: !this.state.mobileError
      });
    else
      this.setState({
        mobile: e.target.value
      });
  };

  onChangeEnquiry = e => {
    if (this.state.enquiryError)
      this.setState({
        enquiryError: !this.state.enquiryError
      });

    if (e.target.value === "")
      this.setState({
        enquiry: "",
        enquiryError: !this.state.enquiryError
      });
    else
      this.setState({
        enquiry: e.target.value
      });
  };

  updateLoadingState = bool => {
    this.setState({
      loading: bool
    });
  };

  onKeyPressMobile = e => {
    let keyPressed = e.key;
    if (!/[0-9]/.test(keyPressed)) e.preventDefault();
  };

  onClickApi = () => {
    if (
      this.state.first_name === "" ||
      this.state.last_name === "" ||
      this.state.mobile === "" ||
      this.state.email === "" ||
      this.state.enquiry === ""
    ) {
      this.updateLoadingState(true);

      if (this.state.first_name === "") {
        this.setState({
          fNameError: !this.state.fNameError
        });
      }

      if (this.state.last_name === "") {
        this.setState({
          lNameError: !this.state.lNameError
        });
      }

      if (this.state.mobile === "") {
        this.setState({
          fNameError: !this.state.fNameError
        });
      }

      if (this.state.email === "") {
        this.setState({
          emailError: !this.state.emailError
        });
      }

      if (this.state.first_name === "") {
        this.setState({
          mobileError: !this.state.mobileError
        });
      }

      if (this.state.enquiry === "") {
        this.setState({
          enquiryError: !this.state.enquiryError
        });
      }

      this.updateLoadingState(false);
    } else {
      this.updateLoadingState(true);
      const mobile = `91${this.state.c_mobile}`;

      this.props.postAirAmbulance(
        this.state.first_name,
        this.state.last_name,
        this.state.email,
        mobile,
        this.state.enquiry
      );
    }
  };

  render() {
    return (
      <div class={this.props.enquiryModal ? "modal is-active" : "modal"}>
        <div class="modal-background" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Hospital Konnect</p>
            <button
              class="delete"
              aria-label="close"
              onClick={() => this.props.updateEnquiryModal(false)}
            />
          </header>
          <section class="modal-card-body">
            <p>Please provide basic detail</p>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class={
                    this.state.fNameError
                      ? "input is-large is-danger"
                      : "input is-large"
                  }
                  type="text"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={event => this.onChangeFirstName(event)}
                />
                <span class="icon is-small is-left">
                  <img src="https://img.icons8.com/ios/25/000000/name.png" />
                </span>
              </div>

              {this.state.fNameError ? (
                <p class="help is-danger">First name mandatory</p>
              ) : null}
            </div>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class={
                    this.state.lNameError
                      ? "input is-large is-danger"
                      : "input is-large"
                  }
                  type="text"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={event => this.onChangeLastName(event)}
                />
                <span class="icon is-small is-left">
                  <img src="https://img.icons8.com/ios/25/000000/name.png" />
                </span>
              </div>

              {this.state.lNameError ? (
                <p class="help is-danger">Last name mandatory</p>
              ) : null}
            </div>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class={
                    this.state.emailError
                      ? "input is-large is-danger"
                      : "input is-large"
                  }
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={event => this.onChangeEmail(event)}
                />
                <span class="icon is-small is-left">
                  <img src="https://img.icons8.com/ios/25/000000/secured-letter.png" />
                </span>
              </div>

              {this.state.emailError ? (
                <p class="help is-danger">Email mandatory</p>
              ) : null}
            </div>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class={
                    this.state.mobileError
                      ? "input is-large is-danger"
                      : "input is-large"
                  }
                  type="text"
                  placeholder="Mobile"
                  value={this.state.mobile}
                  onKeyPress={this.onKeyPressMobile}
                  onChange={event => this.onChangeMobile(event)}
                />
                <span class="icon is-small is-left">
                  <img src="https://img.icons8.com/wired/25/000000/touchscreen-smartphone.png" />
                </span>
              </div>

              {this.state.mobileError ? (
                <p class="help is-danger">Mobile mandatory</p>
              ) : null}
            </div>

            <div class="field">
              <div class="control">
                <textarea
                  class={
                    this.state.enquiryError ? "textarea is-danger" : "textarea is-large"
                  }
                  placeholder="Enquiry"
                  value={this.state.enquiry}
                  onChange={event => this.onChangeEnquiry(event)}
                />
              </div>

              {this.state.enquiryError ? (
                <p class="help is-danger">Enquiry mandatory</p>
              ) : null}
            </div>
          </section>
          <footer class="modal-card-foot">
            <button
              class={
                this.state.loading
                  ? "button is-medium is-loading"
                  : "button is-medium"
              }
              onClick={() => this.onClickApi()}
            >
              SUBMIT
            </button>
          </footer>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}
