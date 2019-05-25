import React from "react";

import "./address.css";

export default class AddressComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div class="container">
        <div className="header">
          <h1>Current Address</h1>
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
                      placeholder="Address one"
                    />
                    <span class="icon is-small is-left">
                      <img src="https://img.icons8.com/wired/25/000000/worldwide-location.png" />
                    </span>
                  </div>
                </div>

                {/* <p class="help is-danger">First name is mandatory</p> */}
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
                      placeholder="Address two"
                    />
                    <span class="icon is-small is-left">
                      <img src="https://img.icons8.com/wired/25/000000/worldwide-location.png" />
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
                      placeholder="Landmark"
                    />
                    <span class="icon is-small is-left">
                      <img src="https://img.icons8.com/ios/25/000000/palace.png" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="spacer is-0" />

            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="field">
                  <div class="control has-icons-left">
                    <div class="select is-large">
                      <select>
                        <option selected>City</option>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <div class="icon is-small is-left">
                      <img src="https://img.icons8.com/ios/25/000000/city-filled.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="spacer is-0" />

            <div class="columns">
              <div class="column is-6 is-offset-3">
                <div class="field">
                  <div class="control has-icons-left">
                    <div class="select is-large">
                      <select>
                        <option selected>Locality</option>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </select>
                    </div>
                    <div class="icon is-small is-left">
                      <img src="https://img.icons8.com/ios/25/000000/city-filled.png" />
                    </div>
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
