import React from "react";
import _ from "lodash";
import AuthModal from "../authModalComponent";
import { Popup } from "semantic-ui-react";
import "./ambulance-tab.css";

const drawAmbulance = (
  key,
  title,
  availability,
  cancelPolicy,
  desc,
  price,
  priceList,
  thirdParty,
  terms,
  obj,
  props,
  json
) => {
  const priceSplit = `Inside city (First 25 km) : ${
    priceList.in_city_base
  }  Inside city (After 25 km) : ${priceList.in_city_after_base}
   Outside city (First 25 km) : ${priceList.out_city_base}
   Outside city (After 25 km) : ${priceList.out_city_after_base} `;

  return (
    <div class="box" key={key}>
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p class="subtitle is-4">{title}</p>

            <p>
              {availability === 0 ? (
                <span class="subtitle is-5">
                  Availability :<span className="available-no">No</span>
                </span>
              ) : (
                <span class="subtitle is-5">
                  Availability :<span className="available-yes">Yes</span>
                </span>
              )}

              <span class="subtitle is-5" style={{ marginLeft: "1em" }}>
                Price :
                <span className="ambulance-price">
                  <del>&#x20b9;</del>
                  {price}
                </span>
                <Popup
                  style={{ height: "1.66667" }}
                  trigger={
                    <img src="https://img.icons8.com/plasticine/20/000000/info-squared.png" />
                  }
                  header="Charge"
                  content={priceSplit}
                />
              </span>
            </p>

            <p
              class="subtitle is-6 has-text-justified"
              style={{ lineHeight: "1.66667", whiteSpace: "pre-line" }}
            >
              {desc}
            </p>
            <div>
              <div style={{ display: "inline-block" }}>
                <Popup
                  style={{ height: "1.66667", whiteSpace: "pre-line" }}
                  trigger={<a>Cancellation policy</a>}
                  header="Cancel Policy"
                  content={cancelPolicy}
                />
              </div>

              <div style={{ display: "inline-block", marginLeft: "2em" }}>
                <Popup
                  style={{ height: "1.66667", whiteSpace: "pre-line" }}
                  trigger={<a>Terms and Condition</a>}
                  header="Terms and Condition"
                  content={terms}
                />
              </div>
            </div>
          </div>
        </div>

        {availability === 0 || thirdParty === 0 ? (
          <a
            class="button is-medium"
            title="Disabled button"
            disabled
            style={{ backgroundColor: "#6e7498", color: "white" }}
          >
            Book
          </a>
        ) : (
          <a
            class="button is-medium"
            style={{ backgroundColor: "#6e7498", color: "white" }}
            onClick={() => props.onClickBook(obj, json, false)}
          >
            Book
          </a>
        )}
      </article>
    </div>
  );
};

const loopAmbulance = (object, category, props, json) => {
  return object.map((obj, key) => {
    let thirdParty = undefined;
    if (category === 1) thirdParty = obj.a_third_party_service;
    return drawAmbulance(
      obj.a_id,
      obj.a_title,
      obj.a_availability,
      obj.a_cancel_policy,
      obj.a_desc,
      obj.a_price,
      obj.a_price_list,
      thirdParty,
      obj.a_tnc,
      obj,
      props,
      json
    );
  });
};

const ambulanceTab = props => {
  const json = props.categoryFeature.categoryFeature;
  if (_.isEmpty(json)) return <div />;
  return (
    <React.Fragment>
      {loopAmbulance(json.p_ambulances, json.p_cat, props, json)}
      {props.authOpen ? (
        <AuthModal
          authOpen={props.authOpen}
          updateOpenState={props.updateOpenState}
          mobileText="Enter your phone number (required)"
          otpText="Enter your otp (required)"
          postMobileRegister={props.postMobileRegister}
          mobileRegister={props.mobileRegister}
          postOtpVerify={props.postOtpVerify}
          otpVerify={props.otpVerify}
          type="BOOKING"
          selectedData={props.selectedData}
          selectedPackage={props.selectedPackage}
          history={props.history}
        />
      ) : null}
    </React.Fragment>
  );
};

export default ambulanceTab;
