import React from "react";
import _ from "lodash";
import AuthModal from "../authModalComponent";
import Spinner from "../spinnerComponent";
import Lightbox from "lightbox-react";
import { Icon } from "semantic-ui-react/dist/commonjs";
import "lightbox-react/style.css";
import "./card-detail.css";

const CardDetail = props => {
  if (props.categoryFeature.status === "START") return <Spinner />;
  else if (props.categoryFeature.status === "FAIL") return <Spinner />;

  if (_.isEmpty(props.categoryFeature.categoryFeature)) return <div />;

  const object = props.categoryFeature.categoryFeature;
  let fullRating = [];
  let emptyRating = [];
  let topRating = 5;
  let halfRating = undefined;
  let logo = object.p_image_thumb;

  const rating = object.p_rating + "";
  const ratingSplit = rating.split(".");

  let imageArray = object.p_images.map(image => {
    return image.original;
  });

  // Half Star
  if (ratingSplit[1] !== undefined) {
    if (parseInt(ratingSplit[1], 10) === 0)
      topRating = topRating - Number(ratingSplit[0]);
    else {
      topRating = topRating - Number(ratingSplit[0]);
      topRating = topRating - 1;

      halfRating = (
        <img src="https://img.icons8.com/color/17/000000/star-half-empty.png" />
        // <Icon
        //   key={1}
        //   name="star half"
        //   style={{
        //     color: "#23d160",
        //     fontSize: "14px",
        //     marginLeft: "3px",
        //     marginRight: "3px"
        //   }}
        // />
      );
    }
  } else topRating = topRating - Number(ratingSplit[0]);

  // Full Star
  for (let i = 0; i < Number(ratingSplit[0]); i++) {
    fullRating.push(i);
  }

  // Empty Star
  for (let i = 0; i < topRating; i++) {
    emptyRating.push(i);
  }

  if (logo === null)
    logo =
      "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_128,w_128/v1555933889/ballyhoo/BALLYHOO_WEBSITE/profile-1.jpg";
  return (
    <div className="box-card-detail">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-200x200">
              <img
                src={logo}
                alt={
                  object.p_name +
                  " " +
                  object.p_type +
                  " " +
                  object.p_short_desc
                }
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p class="title is-3">{object.p_name}</p>
              <p class="subtitle is-6" style={{ color: "black" }}>
                {object.p_type}
              </p>

              {object.p_cat === 1 ? (
                object.p_doctors.length === 0 ? null : (
                  <p className="doctor">{object.p_doctors.length} Doctors</p>
                )
              ) : null}

              {object.p_images.length === 0 ? null : (
                <div className="hospital-image">
                  {object.p_images.map((obj, key) => {
                    return (
                      <span
                        key={key}
                        onClick={() =>
                          props.intializeImageArray(imageArray, true)
                        }
                      >
                        <img
                          src={obj.thumb}
                          alt={
                            object.p_name +
                            " " +
                            object.p_type +
                            " " +
                            object.p_working_status +
                            " " +
                            object.p_address.locality +
                            " " +
                            object.p_address.city
                          }
                        />
                      </span>
                    );
                  })}
                </div>
              )}

              {object.p_cat === 1 ? (
                <div style={{ marginTop: "0.5em" }}>
                  {object.p_specialities.map((obj, key) => {
                    return (
                      <span
                        class="tag"
                        style={{ fontWeight: "400" }}
                        key={obj.spl_id}
                      >
                        {obj.spl_name}
                      </span>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>

          <div className="right-box">
            <div className="rating-container">
              <span className="rating-number">{object.p_rating}</span>
              {fullRating.map(function(i) {
                return (
                  // <Icon
                  //   key={i}
                  //   name="star"
                  //   style={{
                  //     color: "#23d160",
                  //     fontSize: "14px",
                  //     marginLeft: "3px",
                  //     marginRight: "3px"
                  //   }}
                  // />
                  <img src="https://img.icons8.com/color/17/000000/filled-star.png" />
                );
              })}
              <span>{halfRating}</span>
              <span>
                {emptyRating.map(function(i) {
                  return (
                    <img src="https://img.icons8.com/color/17/000000/star.png" />
                    // <Icon
                    //   key={i}
                    //   name="star outline"
                    //   style={{
                    //     color: "#23d160",
                    //     fontSize: "14px",
                    //     marginLeft: "3px",
                    //     marginRight: "3px"
                    //   }}
                    // />
                  );
                })}
              </span>
            </div>

            <div className="location-price-open">
              <div>
                <img src="https://img.icons8.com/ultraviolet/12/000000/marker.png" />
                <span>
                  {object.p_address.locality +
                    "," +
                    " " +
                    object.p_address.city}
                </span>
              </div>

              {object.p_cat === 1 ? (
                <div>
                  <img src="https://img.icons8.com/nolan/12/000000/waypoint-map.png" />
                  <span>{object.p_distance} km</span>
                </div>
              ) : null}

              {object.p_cat === 1 && object.p_working_status !== null ? (
                <div>
                  <img src="https://img.icons8.com/ultraviolet/12/000000/timer.png" />
                  <span style={{ fontWeight: "bold" }}>
                    {object.p_working_status}
                  </span>
                </div>
              ) : null}

              {object.p_cat === 1 ? (
                <div>
                  <img src="https://img.icons8.com/ultraviolet/12/000000/cash-in-hand.png" />
                  <span style={{ fontWeight: "bold" }}>
                    <del>&#x20b9;</del>
                    {object.p_reg_charge}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </article>
        {object.p_cat === 1 ? (
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-medium">
                <span class="icon">
                  <img src="https://img.icons8.com/office/23/000000/hospital.png" />
                </span>
                <span>{object.p_emergency_contact}</span>
              </a>
            </div>

            <div class="card-footer-item">
              <a
                class="button is-medium"
                onClick={() => props.onClickAppointment(object)}
              >
                <span class="icon">
                  <img src="https://img.icons8.com/cotton/25/000000/calendar.png" />
                </span>
                <span>Book Appointment</span>
              </a>
            </div>
          </footer>
        ) : null}

        {object.p_cat === 7 ? (
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-medium">
                <span class="icon">
                  <img src="https://img.icons8.com/ios/25/000000/phone-filled.png" />
                </span>
                <span>{object.p_other_contacts[0]}</span>
              </a>
            </div>

            <div class="card-footer-item">
              <a
                class="button is-large"
                onClick={() => props.onClickEnquiry(object)}
              >
                <span class="icon">
                  <img src="https://img.icons8.com/ios/25/000000/paper-plane-filled.png" />
                </span>
                <span>Enquiry</span>
              </a>
            </div>
          </footer>
        ) : null}
      </div>

      {props.authOpen ? (
        <AuthModal
          authOpen={props.authOpen}
          updateOpenState={props.updateOpenState}
          mobileText="Enter your phone number (required)"
          otpText="Enter your OTP (required)"
          postMobileRegister={props.postMobileRegister}
          mobileRegister={props.mobileRegister}
          postOtpVerify={props.postOtpVerify}
          otpVerify={props.otpVerify}
          type="APPOINTMENT"
          selectedData={object}
          history={props.history}
        />
      ) : null}

      {props.lightBox && (
        <Lightbox
          mainSrc={props.bundleImage[props.photoIndex]}
          nextSrc={
            props.bundleImage[(props.photoIndex + 1) % props.bundleImage.length]
          }
          prevSrc={
            props.bundleImage[
              (props.photoIndex + props.bundleImage.length - 1) %
                props.bundleImage.length
            ]
          }
          onCloseRequest={() => props.intializeImageArray(imageArray, false)}
          onMovePrevRequest={() =>
            props.movePrevRequest(props.photoIndex, props.bundleImage.length)
          }
          onMoveNextRequest={() =>
            props.moveNextRequest(props.photoIndex, props.bundleImage.length)
          }
        />
      )}
    </div>
  );
};

export default CardDetail;
