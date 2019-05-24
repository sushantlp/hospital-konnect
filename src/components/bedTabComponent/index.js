import React from "react";
import _ from "lodash";
import BedModal from "../bedModalComponent";
import AuthModal from "../authModalComponent";
import { Popup } from "semantic-ui-react";

import "./bed-tab.css";

const drawBed = (
  key,
  title,
  description,
  price,
  cancelPolicy,
  terms,
  availability,
  obj,
  props,
  categoryFeature,
  bedFlag
) => {
  return (
    <div class="box" key={key}>
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p class="subtitle is-4">{title}</p>

            <p>
              <span class="subtitle is-5">
                Price :
                <span className="price">
                  <del>&#x20b9;</del>
                  {price}
                </span>
              </span>

              {availability === 0 ? (
                <span class="subtitle is-5" style={{ marginLeft: "1em" }}>
                  Availability :<span className="available-no">No</span>
                </span>
              ) : (
                <span class="subtitle is-5" style={{ marginLeft: "1em" }}>
                  Availability :<span className="available-yes">Yes</span>
                </span>
              )}
            </p>

            <p
              class="subtitle is-6 has-text-justified"
              style={{ lineHeight: "1.66667", whiteSpace: "pre-line" }}
            >
              {description}
            </p>

            <div style={{ display: "inline-block" }}>
              <Popup
                style={{ height: "1.66667", whiteSpace: "pre-line" }}
                trigger={<a>Cancellation policy</a>}
                header="Cancel Policy"
                content={cancelPolicy}
              />
            </div>

            <div
              style={{
                display: "inline-block",
                marginLeft: "2em",
                whiteSpace: "pre-line"
              }}
            >
              <Popup
                style={{ height: "1.66667" }}
                trigger={<a>Terms and Condition</a>}
                header="Terms and Condition"
                content={terms}
              />
            </div>
          </div>
        </div>

        {availability === 0 ? (
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
            onClick={() => props.onClickBook(obj, categoryFeature, bedFlag)}
          >
            Book
          </a>
        )}
      </article>
    </div>
  );
};

const loopBed = (object, category, props, categoryFeature) => {
  return object.map((obj, key) => {
    let id = 0;
    let title = "";
    let desc = "";
    let price = "";
    let cancelPolicy = "";
    let terms = "";
    let availability = 0;
    let bedFlag = false;
    if (category === 1) {
      id = obj.b_id;
      title = obj.b_title;
      desc = obj.b_desc;
      price = obj.b_price;
      cancelPolicy = obj.b_cancel_policy;
      terms = obj.b_tnc;
      availability = obj.b_availability;
      bedFlag = true;
    } else if (category === 3) {
      id = obj.e_id;
      title = obj.e_title;
      desc = obj.e_desc;
      price = obj.e_price;
      cancelPolicy = obj.e_cancel_policy;
      terms = obj.e_tnc;
      availability = obj.e_availability;
      bedFlag = true;
    } else if (category === 4) {
      id = obj.pac_id;
      title = obj.pac_title;
      desc = obj.pac_desc;
      price = obj.pac_price;
      cancelPolicy = obj.pac_cancel_policy;
      terms = obj.pac_tnc;
      availability = obj.pac_availability;
      bedFlag = true;
    } else return true;
    return drawBed(
      id,
      title,
      desc,
      price,
      cancelPolicy,
      terms,
      availability,
      obj,
      props,
      categoryFeature,
      bedFlag
    );
  });
};

const bedTab = props => {
  let json = [];

  if (props.categoryFeature.categoryFeature.p_cat === 1)
    json = props.categoryFeature.categoryFeature.p_beds;
  else if (props.categoryFeature.categoryFeature.p_cat === 3)
    json = props.categoryFeature.categoryFeature.p_equipments;
  else if (props.categoryFeature.categoryFeature.p_cat === 4)
    json = props.categoryFeature.categoryFeature.p_packages;

  if (_.isEmpty(json)) return <div />;

  return (
    <React.Fragment>
      {loopBed(
        json,
        props.categoryFeature.categoryFeature.p_cat,
        props,
        props.categoryFeature.categoryFeature
      )}
      {props.bedOpen ? (
        <BedModal
          bedOpen={props.bedOpen}
          updateBedOpenState={props.updateBedOpenState}
          referralBed={props.referralBed}
          validateReferralBed={props.validateReferralBed}
          updateOpenState={props.updateOpenState}
          selectedData={props.selectedData}
          selectedPackage={props.selectedPackage}
        />
      ) : null}
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

export default bedTab;
