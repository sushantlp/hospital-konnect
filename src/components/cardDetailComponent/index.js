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
            <p style={{ marginBottom: "0.4em", fontWeight: "300" }}>
              <img src="https://img.icons8.com/ultraviolet/15/000000/marker.png" />
              <span style={{ paddingLeft: "0.5em" }}>
                {object.p_address.locality + "," + " " + object.p_address.city}
              </span>
            </p>
            {object.p_cat === 1 ? (
              <p style={{ marginBottom: "0.4em", fontWeight: "300" }}>
                <img src="https://img.icons8.com/ultraviolet/15/000000/timer.png" />
                <span style={{ paddingLeft: "0.5em" }}>Open 24 hours</span>
              </p>
            ) : null}

            {object.p_cat === 1 ? (
              <p style={{ marginBottom: "0.4em", fontWeight: "300" }}>
                <img src="https://img.icons8.com/ultraviolet/15/000000/cash-in-hand.png" />
                <span style={{ paddingLeft: "0.5em" }}>
                  <del>&#x20b9;</del>
                  {object.p_reg_charge}
                </span>
              </p>
            ) : null}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f0f0f5",
            padding: "3px 0 3px 3px",
            marginRight: "3px",
            borderRadius: "3px"
          }}
        >
          <span
            style={{
              color: "#23d160",
              fontWeight: "700",
              fontSize: "14px",
              marginLeft: "3px",
              marginRight: "3px"
            }}
          >
            3.5
          </span>
          <span>
            <i
              class="fas fa-star"
              style={{
                color: "#23d160",
                fontSize: "14px",
                marginLeft: "3px",
                marginRight: "3px"
              }}
            />
            <i
              class="fas fa-star"
              style={{
                color: "#23d160",
                fontSize: "14px",
                marginLeft: "3px",
                marginRight: "3px"
              }}
            />
            <i
              class="fas fa-star"
              style={{
                color: "#23d160",
                fontSize: "14px",
                marginLeft: "3px",
                marginRight: "3px"
              }}
            />
            <i
              class="fas fa-star-half-alt"
              style={{
                color: "#23d160",
                fontSize: "14px",
                marginLeft: "3px",
                marginRight: "3px"
              }}
            />

            <i
              class="far fa-star"
              style={{
                color: "#23d160",
                fontSize: "14px",
                marginLeft: "3px",
                marginRight: "3px"
              }}
            />
          </span>
        </div>
        <div />
      </article>

      <footer class="card-footer">
        <div class="card-footer-item">
          <a class="button is-medium">
            <span class="icon">
              <img src="https://img.icons8.com/office/23/000000/hospital.png" />
            </span>
            <span>7898130226</span>
          </a>
        </div>

        <div class="card-footer-item">
          <a class="button is-info is-medium">
            <span class="icon">
              <img src="https://img.icons8.com/cotton/25/000000/calendar.png" />
            </span>
            <span>Book Appointment</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CardDetail;
