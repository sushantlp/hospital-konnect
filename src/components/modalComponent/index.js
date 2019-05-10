import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      mobile: true,
      otp: false
    };
  }

  onKeyPress = e => {
    let keyPressed = e.key;
    let value = e.target.value;
    console.log(value.length);
    if (!/[0-9]/.test(keyPressed) || value.length !== 0) e.preventDefault();

    // console.log("onKeyPress", e.target.value);
  };
  updateOpenState = () => {
    this.setState({
      open: !this.state.open
    });
  };

  onKeyPressMobile = e => {
    let keyPressed = e.key;
    let value = e.target.value;
    if (!/[0-9]/.test(keyPressed)) e.preventDefault();
    else {
      console.log(value.length);
      console.log(keyPressed);
    }
  };

  render() {
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
            <p>{this.props.text}</p>
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
                          onChange={this.onChange}
                          onKeyPress={this.onKeyPress}
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
                          onChange={this.onChange}
                          onKeyPress={this.onKeyPress}
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
                          onChange={this.onChange}
                          onKeyPress={this.onKeyPress}
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
                          onChange={this.onChange}
                          onKeyPress={this.onKeyPress}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </section>
          <footer class="modal-card-foot">
            <button class="button is-medium">Sumbit</button>
          </footer>
        </div>
      </div>
    );
  }
}
