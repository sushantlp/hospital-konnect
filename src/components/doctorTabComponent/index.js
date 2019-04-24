import React from "react";

import "./doctor-tab.css";

const doctorTab = props => {
  return (
    <React.Fragment>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="https://d3wnzga3fpd9a.cloudfront.net/photos/Dr-Keith-Khuu-DDS-6768-circle_medium.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p class="subtitle is-4" style={{ marginBottom: "0.2em" }}>
                Dr. Sumanth Shetty
              </p>
              <p class="subtitle is-6" style={{ marginBottom: "0.2em" }}>
                Dentist
              </p>
              <p class="subtitle is-6">18 years experience</p>

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
        </article>
      </div>

      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="https://d3wnzga3fpd9a.cloudfront.net/photos/Dr-John-Ashton-Vellequette-DDS-10114-circle_medium__v1__.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p class="subtitle is-4" style={{ marginBottom: "0.2em" }}>
                Dr. Sumanth Shetty
              </p>
              <p class="subtitle is-6" style={{ marginBottom: "0.2em" }}>
                Dentist
              </p>
              <p class="subtitle is-6">18 years experience</p>

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
        </article>
      </div>
    </React.Fragment>
  );
};

export default doctorTab;
