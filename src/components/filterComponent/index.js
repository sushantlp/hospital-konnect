import React from "react";
import _ from "lodash";

// import "../../../node_modules/bulma-checkradio";
import "bulma-checkradio";
import "./filter.css";

export default class Filter extends React.Component {
  render() {
    if (this.props.filterList.status === "START") return <div />;
    else if (this.props.filterList.status === "FAIL") return <div />;

    if (_.isEmpty(this.props.filterList.filterList)) return <div />;

    const object = this.props.filterList.filterList;

    return (
      <div
        class="panel-block"
        style={{
          cursor: this.props.transistor ? "not-allowed" : "auto",
          pointerEvents: this.props.transistor ? "none" : "auto"
        }}
      >
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="">
                {/* <img
                  src="https://getbedtimestories.com/assets/images/app-icon-df78e144.png?1553506572"
                  alt="Hello"
                /> */}
              </a>
            </div>

            <div id="navbar-menu-id" class="navbar-menu">
              <div class="navbar-start">
                {/* <div class="navbar-item has-dropdown is-hoverable">
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

                    <hr class="navbar-divider" />
                    <div class="has-text-centered">
                      <span class="subtitle is-5">Apply</span>
                    </div>
                  </div>
                </div> */}

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Amenities</a>

                  <div class="navbar-dropdown">
                    {object.amenities.map((obj, key) => {
                      return (
                        <a class="navbar-item" key={key}>
                          {obj.label}
                        </a>
                      );
                    })}
                    <hr class="navbar-divider" />
                  </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Price</a>

                  <div class="navbar-dropdown">
                    {object.registration_charges.map((obj, key) => {
                      return (
                        <a class="navbar-item" key={key}>
                          {obj.label}
                        </a>
                      );
                    })}
                    <hr class="navbar-divider" />
                  </div>
                </div>

                {/* <div class="navbar-item has-dropdown is-hoverable">
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
                    <div class="has-text-centered">
                      <span class="subtitle is-5">Apply</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
