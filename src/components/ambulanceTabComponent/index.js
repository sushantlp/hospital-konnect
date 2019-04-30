import React from "react";
import _ from "lodash";

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
  props
) => {
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
              </span>
            </p>

            <p
              class="subtitle is-6 has-text-justified"
              style={{ lineHeight: "1.66667" }}
            >
              {desc}
            </p>
            <div>
              <div
                class={
                  props.parentState.ambulanceCancel
                    ? "dropdown is-left is-active"
                    : "dropdown is-left"
                }
              >
                <div
                  class="dropdown-trigger"
                  // ref={node => (props.this.node = node)}
                >
                  <a
                    aria-haspopup="true"
                    aria-controls="dropdown-menu1"
                    onClick={() => props.changeAmbulanceCancel()}
                  >
                    Cancellation policy
                  </a>
                </div>
                <div class="dropdown-menu" id="dropdown-menu1" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <p style={{ lineHeight: "1.66667" }}>{cancelPolicy}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class={
                  props.parentState.ambulanceTerm
                    ? "dropdown is-left is-active"
                    : "dropdown is-left"
                }
              >
                <div class="dropdown-trigger">
                  <a
                    aria-haspopup="true"
                    aria-controls="dropdown-menu2"
                    onClick={() => props.changeAmbulanceTerm()}
                    style={{ marginLeft: "2em" }}
                  >
                    Terms and Condition
                  </a>
                </div>
                <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <p style={{ lineHeight: "1.66667" }}>{terms}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {availability === 0 || thirdParty === 0 ? (
          <a class="button is-info is-medium" title="Disabled button" disabled>
            Book
          </a>
        ) : (
          <a class="button is-info is-medium">Book </a>
        )}
      </article>
    </div>
  );
};

const loopAmbulance = (object, category, props) => {
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
      props
    );
  });
};

const ambulanceTab = props => {
  const json = props.categoryFeature.categoryFeature;
  if (_.isEmpty(json)) return <div />;
  return (
    <React.Fragment>
      {loopAmbulance(json.p_ambulances, json.p_cat, props)}
    </React.Fragment>
  );
};

export default ambulanceTab;
