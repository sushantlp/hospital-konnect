import React from "react";

import "./bed-tab.css";

const bedTab = props => {
  return (
    <React.Fragment>
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p class="subtitle is-4">Curative care beds</p>

              <p>
                <span class="subtitle is-5">
                  Price :
                  <span className="price">
                    <del>&#x20b9;</del>1000
                  </span>
                </span>

                <span class="subtitle is-5" style={{ marginLeft: "1em" }}>
                  Availability :<span className="available">Yes</span>
                </span>
              </p>

              <p class="subtitle is-6 has-text-justified">
                With over 60 years of experience in Healthcare industry, Manipal
                Hospital Enterprises has now extended its wings with the world
                class 380-bedded multi super specialty hospital in New Delhi.
                Supported by renowned and dedicated medical professionals who
                give incomparable care to the patients every day, Manipal is the
                leading healthcare provider delivering quality healthcare
                services across India.
              </p>
            </div>
          </div>
          <a class="button is-info is-medium">Book </a>
        </article>
      </div>
    </React.Fragment>
  );
};

export default bedTab;
