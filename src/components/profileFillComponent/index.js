import React from "react";
import Spinner from "../spinnerComponent";
import "./profile-fill.css";

import constant from "../../utils/constant";

export default class ProfileFill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c_email: "",
      c_fname: "",
      c_mobile: "",
      c_lname: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(constant.EMAIL_REG);
    if (this.props.readProfile !== nextProps.readProfile) {
      this.setState({
        c_email: nextProps.readProfile.readProfile.c_email,
        c_fname: nextProps.readProfile.readProfile.c_fname,
        c_lname: nextProps.readProfile.readProfile.c_lname,
        c_mobile: nextProps.readProfile.readProfile.c_mobile
      });
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    const authStatus = sessionStorage.getItem("AUTH_STATUS");
    const authData = sessionStorage.getItem("AUTH_DATA");
    if (authStatus === null || authData === null)
      this.props.history.push("/web/");

    const sessionData = JSON.parse(authData);
    this.props.readProfileDetail(sessionData.customer_id);
  }

  render() {
    if (this.props.readProfile.status === "START") return <Spinner />;
    else if (this.props.readProfile.status === "FAIL") return <Spinner />;

    if (
      this.props.readProfile.readProfile.c_email !== null &&
      this.props.readProfile.readProfile.c_fname !== null &&
      this.props.readProfile.readProfile.c_mobile !== null &&
      this.props.readProfile.readProfile.c_lname !== null
    )
      return <Spinner />;

    console.log(this.state.c_fname);
    return (
      <div class="container">
        <div className="header">
          <h1>HOSPITAL KONNECT </h1>
          <p>JUST KONNECT </p>
        </div>

        <div className="form">
          <section class="section">
            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="field">
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="First Name"
                      value={this.state.c_fname}
                    />
                    <span class="icon is-small is-left">
                      <img src="https://img.icons8.com/ios/25/000000/name.png" />
                    </span>
                    {/* <span class="icon is-small is-right">
                    <i class="fas fa-check fa-xs" />
                  </span> */}
                  </div>
                </div>
              </div>
            </div>

            <hr className="spacer is-0" />

            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="field">
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Last Name"
                      value={this.state.c_lname}
                    />
                    <span class="icon is-small is-left">
                      <img src="https://img.icons8.com/ios/25/000000/name.png" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="spacer is-0" />

            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="field">
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-large"
                      type="email"
                      placeholder="Email"
                      value={this.state.c_email}
                      onKeyPress={this.onKeyPressEmail}
                      onChange={event => this.onChangeEmail(event)}
                    />
                    <span class="icon is-small is-left">
                      <img src="https://img.icons8.com/ios/25/000000/secured-letter.png" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="spacer is-0" />

            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="field">
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Mobile"
                      disabled
                      value={this.state.c_mobile}
                    />
                    <span class="icon is-small is-left">
                      <img src="https://img.icons8.com/wired/25/000000/touchscreen-smartphone.png" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="spacer is-2" />

            <div class="columns">
              <div class="column is-6 is-offset-3">
                <button class="button is-large is-fullwidth">NEXT</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
