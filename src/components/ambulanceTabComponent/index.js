import React from "react";
import _ from "lodash";

import "./ambulance-tab.css";

const drawAmbulance = (
  key,
  title,
  availability,
  cancel_policy,
  desc,
  price,
  priceList,
  thirdParty,
  terms,
  obj
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
                <span className="price">
                  <del>&#x20b9;</del>
                  {price}
                </span>
              </span>
            </p>

            <p class="subtitle is-6 has-text-justified">{desc}</p>
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

const loopAmbulance = (object, category) => {
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
      obj
    );
  });
};

const ambulanceTab = props => {
  let json = [];
  if (props.parentState.category === 1)
    json = props.categoryFeature.categoryFeature.p_ambulances;

  if (_.isEmpty(json)) return <div />;

  return (
    <React.Fragment>
      {loopAmbulance(json, props.parentState.category)}
    </React.Fragment>
  );
};

export default ambulanceTab;
