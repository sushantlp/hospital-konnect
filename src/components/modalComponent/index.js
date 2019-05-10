import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      mobile: true,
      otp: false,
      mobileData: 0,
      otpData: 0,
      loading: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mobileRegister !== nextProps.mobileRegister) {
      this.updateLoadingState();
      this.updatemobileState();
      this.updateotpState();
    } else if (this.props.otpVerify !== nextProps.otpVerify) {
    }
  }

  onKeyPressOtp = e => {
    let keyPressed = e.key;
    let value = e.target.value;
    console.log(value.length);
    if (!/[0-9]/.test(keyPressed) || value.length !== 0) e.preventDefault();
    else {
      this.setState({
        otpData: `${this.state.otpData}${e.target.value}`
      });
    }
  };

  updateOpenState = () => {
    this.setState({
      open: !this.state.open
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
    else {
      this.setState({
        mobileData: e.target.value
      });
    }
  };

  onClickApi = () => {
    if (this.state.mobile) {
      this.updateLoadingState();
      const mobile = `91${this.state.mobileData}`;
      this.props.postMobileRegister(mobile);
    } else {
    }
  };

  render() {
    console.log("Render");
    console.log(this.props);
    return (
      <div class={this.state.open ? "modal is-active" : "modal"}>
        <div class="modal-background" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Hospital Konnect</p>
            <button
              class="delete"
              aria-label="close"
              onClick={this.updateOpenState}
            />
          </header>
          <section class="modal-card-body">
            <p>
              {this.state.mobile ? this.props.mobileText : this.props.otpText}
            </p>
            {this.state.mobile ? (
              <div class="field">
                <div class="field">
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-medium"
                      type="text"
                      placeholder="Mobile"
                      onKeyPress={this.onKeyPressMobile}
                    />
                    <span class="icon is-small is-left">
                      <img src="https://img.icons8.com/wired/25/000000/touchscreen-smartphone.png" />
                    </span>
                  </div>
                </div>
              </div>
            ) : null}

            {this.state.otp ? (
              <div className="otp-input">
                <div class="columns">
                  <div class="column is-3">
                    <div class="field">
                      <div class="control">
                        <input
                          class="input is-large"
                          type="text"
                          placeholder="0"
                          onKeyPress={this.onKeyPressOtp}
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
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </section>
          <footer class="modal-card-foot">
            <button
              class={
                this.state.loading
                  ? "button is-medium is-loading"
                  : "button is-medium"
              }
              // disabled={this.state.loading ? true : false}
              onClick={() => this.onClickApi()}
            >
              Sumbit
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
