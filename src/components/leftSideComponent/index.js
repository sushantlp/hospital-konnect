import React from "react";

import "./left-side.css";

const LeftSideComponent = props => {
  return (
    <React.Fragment>
      <p class="title is-4" style={{ color: "#414146" }}>
        Confirm Appointment
      </p>
      <div class="field">
        <label class="label" style={{ fontWeight: "400" }}>
          Patient/Visitor First Name
        </label>
        <div class="control">
          <input class="input is-large" type="text" placeholder="First Name" />
        </div>
      </div>

      <div class="field">
        <label class="label" style={{ fontWeight: "400" }}>
          Patient/Visitor Last Name
        </label>
        <div class="control">
          <input class="input is-large" type="text" placeholder="Last Name" />
        </div>
      </div>

      <div class="field">
        <label class="label" style={{ fontWeight: "400" }}>
          Email
        </label>
        <div class="control">
          <input class="input is-large" type="email" placeholder="Email" />
        </div>
      </div>

      <div class="field">
        <label class="label" style={{ fontWeight: "400" }}>
          Mobile
        </label>
        <div class="control">
          <input class="input is-large" type="text" placeholder="Mobile" />
        </div>
      </div>

      <hr className="spacer is-1" />

      <div class="field">
        <label class="label" style={{ fontWeight: "400" }}>
          Department
        </label>
        <div class="control">
          <div class="select is-medium">
            <select>
              <option>department1</option>
              <option>department2</option>
              <option>department3</option>
            </select>
          </div>
        </div>
      </div>

      <hr className="spacer is-1" />

      <div class="field">
        <label class="label" style={{ fontWeight: "400" }}>
          Choose a payment option to Book Appointment
        </label>

        <div class="field">
          <input
            class="is-checkradio"
            id="Pay-online"
            type="radio"
            name="exampleRadioInline"
            checked="checked"
          />
          <label for="Pay-online">Pay online</label>
          <input
            class="is-checkradio"
            id="Pay-later"
            type="radio"
            name="exampleRadioInline"
          />
          <label for="Pay-later">Pay later</label>
        </div>
      </div>

      <hr className="spacer is-2" />
      <div className="appointment-button">
        <button class="button is-large is-fullwidth">CONFIRM</button>
      </div>
    </React.Fragment>
  );
};

export default LeftSideComponent;
