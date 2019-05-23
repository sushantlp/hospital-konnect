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
      c_lname: "",
      emailError: false,
      fNameError: false,
      lNameError: false,
      customerId: 0,
      loading: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.readProfile !== nextProps.readProfile) {
      this.setState({
        c_email:
          nextProps.readProfile.readProfile.c_email === null
            ? ""
            : nextProps.readProfile.readProfile.c_email,
        c_fname:
          nextProps.readProfile.readProfile.c_fname === null
            ? ""
            : nextProps.readProfile.readProfile.c_fname,
        c_lname:
          nextProps.readProfile.readProfile.c_lname === null
            ? ""
            : nextProps.readProfile.readProfile.c_lname,
        c_mobile: nextProps.readProfile.readProfile.c_mobile
      });
    } else if (this.props.writeProfile !== nextProps.writeProfile) {
      const data = {
        first_name: this.state.c_fname,
        last_name: this.state.c_lname,
        email: this.state.c_email,
        mobile: this.state.c_mobile
      };
      sessionStorage.setItem("PROFILE_DATA", JSON.stringify(data));
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    const authStatus = sessionStorage.getItem("AUTH_STATUS");
    const authData = sessionStorage.getItem("AUTH_DATA");
    if (authStatus === null || authData === null)
      this.props.history.push("/web/");

    const sessionData = JSON.parse(authData);
    console.log(sessionData);
    this.props.readProfileDetail(sessionData.customer_id);

    this.setState({
      customerId: sessionData.customer_id
    });
  }

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

      this.props.writeProfileDetail(
        this.state.customerId,
        this.state.c_fname,
        this.state.c_lname,
        this.state.c_email
      );
    }
  };

  render() {
    if (this.props.readProfile.status === "START") return <Spinner />;
    else if (this.props.readProfile.status === "FAIL") return <Spinner />;

    if (
      this.props.readProfile.readProfile.c_email !== null &&
      this.props.readProfile.readProfile.c_fname !== null &&
      this.props.readProfile.readProfile.c_mobile !== null &&
      this.props.readProfile.readProfile.c_lname !== null
    )
      // return <Spinner />;

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
                        onChange={event => this.onChangeFirstName(event)}
                      />
                      <span class="icon is-small is-left">
                        <img src="https://img.icons8.com/ios/25/000000/name.png" />
                      </span>
                      {/* <span class="icon is-small is-right">
                    <i class="fas fa-check fa-xs" />
                  </span> */}
                    </div>
                  </div>
                  {this.state.fNameError ? (
                    <p class="help is-danger">First name is mandatory</p>
                  ) : null}
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
                        onChange={event => this.onChangeLastName(event)}
                      />
                      <span class="icon is-small is-left">
                        <img src="https://img.icons8.com/ios/25/000000/name.png" />
                      </span>
                    </div>
                  </div>

                  {this.state.lNameError ? (
                    <p class="help is-danger">Last name is mandatory</p>
                  ) : null}
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
                        onChange={event => this.onChangeEmail(event)}
                      />
                      <span class="icon is-small is-left">
                        <img src="https://img.icons8.com/ios/25/000000/secured-letter.png" />
                      </span>
                    </div>
                  </div>
                  {this.state.emailError ? (
                    <p class="help is-danger">Email is not valid</p>
                  ) : null}
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
                  <button
                    class={
                      this.state.loading
                        ? "button is-large is-fullwidth is-loading"
                        : "button is-large is-fullwidth"
                    }
                    onClick={() => this.onClickApi()}
                  >
                    NEXT
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
  }
}
