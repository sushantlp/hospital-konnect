import React from "react";
import "./modal.css";

const onChange = e => {
  // console.log("change", e.target.value);
};

const onKeyPress = e => {
  let keyPressed = e.key;
  let value = e.target.value;
  console.log(value.length);
  if (!/[0-9]/.test(keyPressed) || value.length !== 0) {
    e.preventDefault();
  }

  // console.log("onKeyPress", e.target.value);
};

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
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input is-medium"
                  type="text"
                  placeholder="Mobile"
                />
                <span class="icon is-small is-left">
                  <img src="https://img.icons8.com/wired/25/000000/touchscreen-smartphone.png" />
                </span>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-3">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="0"
                    onChange={onChange}
                    onKeyPress={onKeyPress}
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
                    onChange={onChange}
                    onKeyPress={onKeyPress}
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
                    onChange={onChange}
                    onKeyPress={onKeyPress}
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
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                  />
                </div>
              </div>
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
