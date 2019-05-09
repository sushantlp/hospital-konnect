import React from "react";
import "./modal.css";

const modal = props => {
  console.log(props);

  return (
    <div class={props.open ? "modal is-active" : "modal"}>
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Hospital Konnect</p>
          <button
            class="delete"
            aria-label="close"
            onClick={props.updateOpenState}
          />
        </header>
        <section class="modal-card-body">
          <p>Enter your phone number (required)</p>

          <div class="field">
            <div class="control">
              <input
                class="input is-medium"
                type="text"
                placeholder="Mobile number"
              />
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-medium">Sumbit</button>
        </footer>
      </div>
    </div>
  );
};

export default modal;
