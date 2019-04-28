import React from "react";
import _ from "lodash";
import Spinner from "../spinnerComponent";
import "./card-detail.css";

const CardDetail = props => {
  if (props.categoryFeature.status === "START") return <Spinner />;
  else if (props.categoryFeature.status === "FAIL") return <Spinner />;

  if (_.isEmpty(props.categoryFeature.categoryFeature)) return <div />;
  const object = props.categoryFeature.categoryFeature;

  let logo = object.p_logo;
  if (logo === null)
    logo =
      "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_128,w_128/v1555933889/ballyhoo/BALLYHOO_WEBSITE/profile-1.jpg";
  return (
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              src={logo}
              alt={
                object.p_name + " " + object.p_type + " " + object.p_short_desc
              }
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="title is-3" style={{ fontWeight: "400" }}>
              {object.p_name}
            </p>
            <p class="subtitle is-6">{object.p_type}</p>
            <p style={{ marginBottom: "0.4em" }}>
              <span class="icon">
                <i class="fas fa-map-marker-alt" />
              </span>
              <span class="subtitle is-6">
                {object.p_address.locality + " " + object.p_address.city}
              </span>
            </p>
            {props.parentState.category === 1 ? (
              <p style={{ marginBottom: "0.4em" }}>
                <span class="icon">
                  <i class="far fa-clock" />
                </span>

                <span class="subtitle is-6">Open 24 hours</span>
              </p>
            ) : null}

            {props.parentState.category === 1 ? (
              <p style={{ marginBottom: "0.4em" }}>
                <span class="icon">
                  <i class="fas fa-wallet" />
                </span>
                <span class="subtitle is-6">
                  Registration Charges :
                  <span class="tag is-info is-medium">
                    <del>&#x20b9;</del>
                    {object.p_reg_charge}
                  </span>
                </span>
              </p>
            ) : null}

            {/* <p>
              <span class="icon">
                <i class="fas fa-ambulance" />
              </span>

              <span class="subtitle is-6">
                Ambulance :<span class="tag is-danger is-medium">No</span>
              </span>
            </p> */}
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

            {props.parentState.category === 1 ? (
              <a class="button is-info is-medium">
                <span class="icon">
                  <i class="fas fa-phone-square" />
                </span>
                <span>{object.p_emergency_contact}</span>
              </a>
            ) : null}
          </p>
        </div>
      </article>
    </div>
  );
};

export default CardDetail;
