import React from "react";
import "./auth-modal.css";

// import { Auth, Auth_Data } from "../../utils/constant";

export default class AuthModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true,
      otp: false,
      mobileData: 0,
      otpInput1: -1,
      otpInput2: -1,
      otpInput3: -1,
      otpInput4: -1,
      loading: false,
      errorStatus: false,
      errorMsg: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mobileRegister !== nextProps.mobileRegister) {
      if (nextProps.mobileRegister.status === "SUCCESS") {
        this.updateLoadingState();
        this.updatemobileState();
        this.updateotpState();

        
      } else if (nextProps.mobileRegister.status === "FAIL") {
        this.updateLoadingState();
        this.updateErrorStatusState(true);
        this.updateErrorMsgState(nextProps.mobileRegister.msg);
      }
    } else if (this.props.otpVerify !== nextProps.otpVerify) {
      if (nextProps.otpVerify.status === "SUCCESS") {
        this.updateLoadingState();
        const data = {
          type: this.props.type,
          customer_id: nextProps.otpVerify.otpVerify.c_id,
          role: nextProps.otpVerify.otpVerify.role
        };

        if (this.props.type !== "APPOINTMENT")
          sessionStorage.setItem(
            "PACKAGE_DATA",
            JSON.stringify(this.props.selectedPackage)
          );

        sessionStorage.setItem(
          "ALL_DATA",
          JSON.stringify(this.props.selectedData)
        );

        sessionStorage.setItem("AUTH_STATUS", true);
        sessionStorage.setItem("AUTH_DATA", JSON.stringify(data));

        this.props.history.push("/profile/");
      } else if (nextProps.otpVerify.status === "FAIL") {
        this.updateLoadingState();
        this.updateErrorStatusState(true);
        this.updateErrorMsgState(nextProps.otpVerify.msg);
      }
    }
  }

  updateErrorStatusState = bool => {
    this.setState({
      errorStatus: bool
    });
  };

  updateErrorMsgState = errorMsg => {
    this.setState({
      errorMsg: errorMsg
    });
  };

  updatemobileState = () => {
    this.setState({
      mobile: !this.state.mobile
    });
  };

  updateotpState = () => {
    this.setState({
      otp: !this.state.otp
    });
  };

  updateLoadingState = () => {
    this.setState({
      loading: !this.state.loading
    });
  };

  onKeyPressMobile = e => {
    let keyPressed = e.key;
    if (!/[0-9]/.test(keyPressed)) e.preventDefault();
  };

  onChangeMobile = e => {
    if (e.target.value === "")
      this.setState({
        mobileData: 0
      });
    else
      this.setState({
        mobileData: e.target.value
      });
  };

  onKeyPressOtp = e => {
    let keyPressed = e.key;
    let value = e.target.value;
    if (!/[0-9]/.test(keyPressed) || value.length !== 0) e.preventDefault();
  };

  onChangeOtp = (e, position) => {
    if (position === 1) {
      if (e.target.value === "")
        this.setState({
          otpInput1: -1
        });
      else
        this.setState({
          otpInput1: e.target.value
        });
    } else if (position === 2) {
      if (e.target.value === "")
        this.setState({
          otpInput2: -1
        });
      else
        this.setState({
          otpInput2: e.target.value
        });
    } else if (position === 3) {
      if (e.target.value === "")
        this.setState({
          otpInput3: -1
        });
      else
        this.setState({
          otpInput3: e.target.value
        });
    } else {
      if (e.target.value === "")
        this.setState({
          otpInput4: -1
        });
      else
        this.setState({
          otpInput4: e.target.value
        });
    }
  };

  onClickApi = () => {
    if (this.state.mobile) {
      this.updateLoadingState();
      this.props.postMobileRegister(`91${this.state.mobileData}`);
    } else {
      this.updateLoadingState();
      this.props.postOtpVerify(
        `91${this.state.mobileData}`,
        `${this.state.otpInput1}${this.state.otpInput2}${this.state.otpInput3}${
          this.state.otpInput4
        }`
      );
    }
  };

  render() {
    return (
      <div class={this.props.authOpen ? "modal is-active" : "modal"}>
        <div class="modal-background" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Hospital Konnect</p>
            <button
              class="delete"
              aria-label="close"
              onClick={() => this.props.updateOpenState(false)}
            />
          </header>
          <section class="modal-card-body">
            <p>
              {this.state.mobile ? this.props.mobileText : this.props.otpText}
            </p>
            {this.state.mobile ? (
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input is-medium"
                    type="text"
                    placeholder="Mobile"
                    onKeyPress={this.onKeyPressMobile}
                    onChange={this.onChangeMobile}
                  />
                  <span class="icon is-small is-left">
                    <img src="https://img.icons8.com/wired/25/000000/touchscreen-smartphone.png" />
                  </span>
                </div>
                {this.state.errorStatus ? (
                  <p class="help is-danger">{this.state.errorMsg}</p>
                ) : null}
              </div>
            ) : null}

            {this.state.otp ? (
              <div className="otp-input">
                <div class="columns">
                  <div class="column">
                    <div class="field">
                      <div class="control">
                        <input
                          class="input is-large"
                          type="text"
                          placeholder="0"
                          onKeyPress={this.onKeyPressOtp}
                          onChange={event => this.onChangeOtp(event, 1)}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="column is-3">
                    <div class="field">
                      <div class="control">
                        <input
                          class="input is-large"
                          type="text"
                          placeholder="0"
                          onKeyPress={this.onKeyPressOtp}
                          onChange={event => this.onChangeOtp(event, 2)}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="column is-3">
                    <div class="field">
                      <div class="control">
                        <input
                          class="input is-large"
                          type="text"
                          placeholder="0"
                          onKeyPress={this.onKeyPressOtp}
                          onChange={event => this.onChangeOtp(event, 3)}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="column is-3">
                    <div class="field">
                      <div class="control">
                        <input
                          class="input is-large"
                          type="text"
                          placeholder="0"
                          onKeyPress={this.onKeyPressOtp}
                          onChange={event => this.onChangeOtp(event, 4)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.errorStatus ? (
                  <p class="help is-danger">{this.state.errorMsg}</p>
                ) : null}
              </div>
            ) : null}
          </section>
          <footer class="modal-card-foot">
            {this.state.mobile ? (
              this.state.mobileData === 0 ? (
                <button
                  class={
                    this.state.loading
                      ? "button is-medium is-loading"
                      : "button is-medium"
                  }
                  onClick={() => this.onClickApi()}
                  disabled
                >
                  Sumbit
                </button>
              ) : (
                <button
                  class={
                    this.state.loading
                      ? "button is-medium is-loading"
                      : "button is-medium"
                  }
                  onClick={() => this.onClickApi()}
                >
                  Sumbit
                </button>
              )
            ) : this.state.otpInput1 === -1 ||
              this.state.otpInput2 === -1 ||
              this.state.otpInput3 === -1 ||
              this.state.otpInput4 === -1 ? (
              <button
                class={
                  this.state.loading
                    ? "button is-medium is-loading"
                    : "button is-medium"
                }
                onClick={() => this.onClickApi()}
                disabled
              >
                Sumbit
              </button>
            ) : (
              <button
                class={
                  this.state.loading
                    ? "button is-medium is-loading"
                    : "button is-medium"
                }
                onClick={() => this.onClickApi()}
              >
                Sumbit
              </button>
            )}
          </footer>
        </div>
      </div>
    );
  }
}
