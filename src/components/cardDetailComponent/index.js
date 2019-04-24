import React from "react";
import "./card-detail.css";

const CardDetail = props => {
  return (
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_128,w_128/v1555933889/ballyhoo/BALLYHOO_WEBSITE/profile-1.jpg"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="title is-3" style={{ fontWeight: "400" }}>
              People Tree Hospitals
            </p>
            <p class="subtitle is-6">Multi-Speciality Hospital</p>
            <p style={{ marginBottom: "0.4em" }}>
              <span class="icon">
                <i class="fas fa-map-marker-alt" />
              </span>
              <span class="subtitle is-6">West of Chord Road, Bangalore</span>
            </p>
            <p style={{ marginBottom: "0.4em" }}>
              <span class="icon">
                <i class="far fa-clock" />
              </span>

              <span class="subtitle is-6">Open 24 hours</span>
            </p>

            <p style={{ marginBottom: "0.4em" }}>
              <span class="icon">
                <i class="fas fa-wallet" />
              </span>
              <span class="subtitle is-6">
                Registration Charges :
                <span class="tag is-info is-medium">
                  <del>&#x20b9;</del>500
                </span>
              </span>
            </p>

            <p>
              <span class="icon">
                <i class="fas fa-ambulance" />
              </span>

              <span class="subtitle is-6">
                Ambulance :<span class="tag is-danger is-medium">No</span>
              </span>
            </p>
          </div>
        </div>
        <div>
          <p class="buttons ">
            <a class="button is-info is-medium">
              <span class="icon">
                <i class="fas fa-bolt" />
              </span>
              <span>Book Now</span>
            </a>
            <a class="button is-info is-medium">
              <span class="icon">
                <i class="fas fa-phone-square" />
              </span>
              <span>7898130226</span>
            </a>
          </p>
        </div>
      </article>
    </div>
  );
};

export default CardDetail;
