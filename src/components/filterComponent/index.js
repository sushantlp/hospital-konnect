import React from "react";

// import { Dropdown } from "semantic-ui-react";

import "../../../node_modules/bulma-checkradio";
import "./filter.css";

export default class Filter extends React.Component {
  render() {
    return (
      <div class="panel-block">
        <div class="container">
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                  alt="Hello"
                />
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Price</a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      <div class="field">
                        <input
                          class="is-checkradio"
                          id="exampleRadioDefault1"
                          type="radio"
                          name="exampleRadioDefault1"
                          // checked="checked"
                        />
                        <label for="exampleRadioDefault1">Free</label>
                      </div>
                    </a>
                    <a class="navbar-item">
                      <div class="field">
                        <input
                          class="is-checkradio"
                          id="exampleRadioDefault2"
                          type="radio"
                          name="exampleRadioDefault2"
                          // checked="checked"
                        />
                        <label for="exampleRadioDefault2">1-200</label>
                      </div>
                    </a>
                    <a class="navbar-item">
                      <div class="field">
                        <input
                          class="is-checkradio"
                          id="exampleRadioDefault3"
                          type="radio"
                          name="exampleRadioDefault3"
                          // checked="checked"
                        />
                        <label for="exampleRadioDefault3">201-500</label>
                      </div>
                    </a>

                    <a class="navbar-item">
                      <div class="field">
                        <input
                          class="is-checkradio"
                          id="exampleRadioDefault4"
                          type="radio"
                          name="exampleRadioDefault4"
                          // checked="checked"
                        />
                        <label for="exampleRadioDefault4">500 +</label>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Availability</a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">Available Today</a>
                    <a class="navbar-item">Available Any Day</a>
                    <a class="navbar-item">Available in next 3 days</a>
                    <a class="navbar-item">Available coming weekend</a>
                  </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Amenities</a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      <div class="field">
                        <input
                          class="is-checkradio is-circle"
                          id="exampleCheckboxDefaultCircle1"
                          type="checkbox"
                          name="exampleCheckboxDefaultCircle1"
                          // checked="checked"
                        />
                        <label for="exampleCheckboxDefaultCircle1">
                          Has Parking
                        </label>
                      </div>
                    </a>
                    <a class="navbar-item">
                      <div class="field">
                        <input
                          class="is-checkradio is-circle"
                          id="exampleCheckboxDefaultCircle2"
                          type="checkbox"
                          name="exampleCheckboxDefaultCircle2"
                          // checked="checked"
                        />
                        <label for="exampleCheckboxDefaultCircle2">
                          Diagnostic lab
                        </label>
                      </div>
                    </a>
                    <a class="navbar-item">
                      <div class="field">
                        <input
                          class="is-checkradio is-circle"
                          id="exampleCheckboxDefaultCircle3"
                          type="checkbox"
                          name="exampleCheckboxDefaultCircle3"
                          // checked="checked"
                        />
                        <label for="exampleCheckboxDefaultCircle3">
                          24*7 pharmacy
                        </label>
                      </div>
                    </a>

                    <a class="navbar-item">
                      <div class="field">
                        <input
                          class="is-checkradio is-circle"
                          id="exampleCheckboxDefaultCircle4"
                          type="checkbox"
                          name="exampleCheckboxDefaultCircle4"
                          // checked="checked"
                        />
                        <label for="exampleCheckboxDefaultCircle4">
                          Cafeteria
                        </label>
                      </div>
                    </a>

                    <hr class="navbar-divider" />
                    <div>
                      <span>Apply</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
