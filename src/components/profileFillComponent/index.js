import React from "react";

import "./profile-fill.css";

const ProfileFill = props => {
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
                  />
                  <span class="icon is-small is-left">
                    <img src="https://img.icons8.com/ios/25/000000/name.png" />
                  </span>
                  {/* <span class="icon is-small is-right">
                  <i class="fas fa-check fa-xs" />
                </span> */}
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
                    placeholder="Last Name"
                  />
                  <span class="icon is-small is-left">
                    <img src="https://img.icons8.com/ios/25/000000/name.png" />
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
                    type="email"
                    placeholder="Email"
                  />
                  <span class="icon is-small is-left">
                    <img src="https://img.icons8.com/ios/25/000000/secured-letter.png" />
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
                    placeholder="Mobile"
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
              <button class="button is-large is-fullwidth">NEXT</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileFill;
