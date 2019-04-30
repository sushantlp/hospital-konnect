import React from "react";
import _ from "lodash";

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
  props
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

            <p class="subtitle is-6 has-text-justified">{description}</p>

            <div
              class={
                props.parentState.bedCancel
                  ? "dropdown is-left is-active"
                  : "dropdown is-left"
              }
            >
              <div class="dropdown-trigger">
                <a
                  aria-haspopup="true"
                  aria-controls="dropdown-menu1"
                  onClick={() => props.changeBedCancel()}
                >
                  Cancellation policy
                </a>
              </div>
              <div class="dropdown-menu" id="dropdown-menu1" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>{cancelPolicy}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class={
                props.parentState.bedTerm
                  ? "dropdown is-left is-active"
                  : "dropdown is-left"
              }
            >
              <div class="dropdown-trigger">
                <a
                  aria-haspopup="true"
                  aria-controls="dropdown-menu2"
                  onClick={() => props.changeBedTerm()}
                  style={{ marginLeft: "2em" }}
                >
                  Terms and Condition
                </a>
              </div>
              <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <p>{terms}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {availability === 0 ? (
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

const loopBed = (object, category, props) => {
  return object.map((obj, key) => {
    let id = 0;
    let title = "";
    let desc = "";
    let price = "";
    let cancelPolicy = "";
    let terms = "";
    let availability = 0;
    if (category === 1) {
      id = obj.b_id;
      title = obj.b_title;
      desc = obj.b_desc;
      price = obj.b_price;
      cancelPolicy = obj.b_cancel_policy;
      terms = obj.b_tnc;
      availability = obj.b_availability;
    } else if (category === 3) {
      id = obj.e_id;
      title = obj.e_title;
      desc = obj.e_desc;
      price = obj.e_price;
      cancelPolicy = obj.e_cancel_policy;
      terms = obj.e_tnc;
      availability = obj.e_availability;
    } else if (category === 4) {
      id = obj.pac_id;
      title = obj.pac_title;
      desc = obj.pac_desc;
      price = obj.pac_price;
      cancelPolicy = obj.pac_cancel_policy;
      terms = obj.pac_tnc;
      availability = obj.pac_availability;
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
      props
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
      {loopBed(json, props.categoryFeature.categoryFeature.p_cat, props)}
    </React.Fragment>
  );
};

export default bedTab;
