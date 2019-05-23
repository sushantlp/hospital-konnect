import React from "react";
import "./bed-modal.css";

export default class BedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      errorStatus: false,
      loading: false
    };
  }

  componentWillReceiveProps(nextProps) {}

  updateOpenState = () => {
    this.setState({
      open: !this.state.open
    });
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
            <p>Please provide the partner's referal code</p>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input is-medium"
                  type="text"
                  placeholder="Referal code"
                  // onKeyPress={this.onKeyPressMobile}
                  // onChange={this.onChangeMobile}
                />
                <span class="icon is-small is-left">
                  <img src="https://img.icons8.com/wired/25/000000/touchscreen-smartphone.png" />
                </span>
              </div>
              {this.state.errorStatus ? <p class="help is-danger">""</p> : null}
            </div>
          </section>
          <footer class="modal-card-foot">
            <button
              class={
                this.state.loading
                  ? "button is-medium is-loading"
                  : "button is-medium"
              }
              // onClick={() => this.onClickApi()}
            >
              Sumbit
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
