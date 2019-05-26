import React from "react";
import "./left-side.css";

const LeftSideComponent = props => {
  return (
    <div className="left-side-header">
      <p class="title is-4">{props.leftHeaderName}</p>
      <div class="field">
        <label class="label">Patient/Visitor First Name</label>
        <div class="control">
          <input
            class={
              props.state.fNameError
                ? "input is-large is-danger"
                : "input is-large"
            }
            type="text"
            placeholder="First Name"
            value={props.state.c_fname}
            onChange={props.onChangeFirstName}
          />
        </div>

        {props.state.fNameError ? (
          <p class="help is-danger">This first name is invalid</p>
        ) : null}
      </div>

      <div class="field">
        <label class="label">Patient/Visitor Last Name</label>
        <div class="control">
          <input
            class={
              props.state.lNameError
                ? "input is-large is-danger"
                : "input is-large"
            }
            type="text"
            placeholder="Last Name"
            value={props.state.c_lname}
            onChange={props.onChangeLastName}
          />
        </div>

        {props.state.lNameError ? (
          <p class="help is-danger">This last name is invalid</p>
        ) : null}
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class={
              props.state.emailError
                ? "input is-large is-danger"
                : "input is-large"
            }
            type="email"
            placeholder="Email"
            value={props.state.c_email}
            onChange={props.onChangeEmail}
          />
        </div>

        {props.state.emailError ? (
          <p class="help is-danger">This email is invalid</p>
        ) : null}
      </div>

      <div class="field">
        <label class="label">Mobile</label>
        <div class="control">
          <input
            class={
              props.state.mobileError
                ? "input is-large is-danger"
                : "input is-large"
            }
            type="text"
            placeholder="Mobile"
            value={props.state.c_mobile}
            onKeyPress={props.onKeyPressMobile}
            onChange={props.onChangeMobile}
          />
        </div>

        {props.state.mobileError ? (
          <p class="help is-danger">This mobile is invalid</p>
        ) : null}
      </div>

      <hr className="spacer is-1" />

      {props.department.length === 0 ? null : (
        <div class="field">
          <label class="label">Department</label>
          <div class="control">
            <div class="select is-medium">
              <select onChange={event => props.onChangeDropdown(event)}>
                {props.department.map((obj, key) => {
                  return (
                    <option key={obj.dep_id} value={obj.dep_id}>
                      {obj.dep_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      )}

      <hr className="spacer is-1" />

      <div class="field">
        <label class="label">Choose a payment option to Book Appointment</label>

        <div class="field">
          <input
            class="is-checkradio"
            id="Pay-online"
            type="radio"
            checked={props.state.payment === "PAY_ONLINE" ? "checked" : ""}
            name="exampleRadioInline"
            onChange={event => props.onChangeRadio(event, "PAY_ONLINE")}
          />
          <label for="Pay-online" style={{ color: "#363636" }}>
            Pay online
          </label>
          <input
            class="is-checkradio"
            id="Pay-later"
            type="radio"
            checked={props.state.payment === "PAY_LATER" ? "checked" : ""}
            name="exampleRadioInline"
            onChange={event => props.onChangeRadio(event, "PAY_LATER")}
          />
          <label for="Pay-later" style={{ color: "#363636" }}>
            Pay later
          </label>
        </div>
      </div>

      <hr className="spacer is-2" />
      <div className="appointment-button">
        <button class="button is-large is-fullwidth" onClick={props.onClickApi}>
          CONFIRM
        </button>
      </div>
    </div>
  );
};

export default LeftSideComponent;
