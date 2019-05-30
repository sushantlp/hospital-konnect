import React from "react";
import "./bed-modal.css";

export default class BedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStatus: false,
      errorMsg: "",
      loading: false,
      referal: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.referralBed !== nextProps.referralBed) {
      if (nextProps.referralBed.status === "SUCCESS") {
        this.updateLoadingState(false);

        sessionStorage.setItem(
          "REFERRAL_BED",
          JSON.stringify(nextProps.referralBed.referralBed.referral_partner)
        );
        const authStatus = sessionStorage.getItem("AUTH_STATUS");
        let authData = sessionStorage.getItem("AUTH_DATA");
        authData = JSON.parse(authData);
        if (authStatus !== null || authStatus) {
          const data = {
            type: this.props.type,
            customer_id: authData.customer_id,
            role: authData.role
          };

          sessionStorage.setItem("AUTH_DATA", JSON.stringify(data));

          sessionStorage.setItem(
            "ALL_DATA",
            JSON.stringify(this.props.selectedData)
          );
          sessionStorage.setItem(
            "PACKAGE_DATA",
            JSON.stringify(this.props.selectedPackage)
          );
          this.props.history.push("/package-booking/");
        } else {
          this.props.updateBedOpenState(false);
          this.props.updateOpenState(true);
        }
      } else if (nextProps.referralBed.status === "FAIL") {
        this.updateLoadingState(false);
        this.updateErrorStatus(true);
        this.updateErrorMsg(nextProps.referralBed.msg);
      }
    }
  }

  onChangeReferal = e => {
    if (e.target.value === "")
      this.setState({
        referal: ""
      });
    else
      this.setState({
        referal: e.target.value
      });
  };

  updateErrorMsg = msg => {
    this.setState({
      errorMsg: msg
    });
  };

  updateErrorStatus = bool => {
    this.setState({
      errorStatus: bool
    });
  };

  updateLoadingState = bool => {
    this.setState({
      loading: bool
    });
  };

  onClickApi = () => {
    this.updateLoadingState(true);
    this.props.validateReferralBed(this.state.referal);
  };
  render() {
    return (
      <div class={this.props.bedOpen ? "modal is-active" : "modal"}>
        <div class="modal-background" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Hospital Konnect</p>
            <button
              class="delete"
              aria-label="close"
              onClick={() => this.props.updateBedOpenState(false)}
            />
          </header>
          <section class="modal-card-body">
            <p>Please provide the partner's referal code</p>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input is-medium"
                  type="text"
                  placeholder="Referal code"
                  onChange={event => this.onChangeReferal(event)}
                />
                <span class="icon is-small is-left">
                  <img src="https://img.icons8.com/ios/25/000000/code-file.png" />
                </span>
              </div>
              {this.state.errorStatus ? (
                <p class="help is-danger">{this.state.errorMsg}</p>
              ) : null}
            </div>
          </section>
          <footer class="modal-card-foot">
            {this.state.referal === "" ? (
              <button class="button is-medium" disabled>
                SUBMIT
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
                SUBMIT
              </button>
            )}
          </footer>
        </div>
      </div>
    );
  }
}
