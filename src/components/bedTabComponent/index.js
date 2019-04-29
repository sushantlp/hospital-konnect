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
  obj
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

const loopBed = (object, category) => {
  return object.map((obj, key) => {
    return drawBed(
      obj.b_id,
      obj.b_title,
      obj.b_desc,
      obj.b_price,
      obj.b_cancel_policy,
      obj.b_tnc,
      obj.b_availability,
      obj
    );
  });
};

const bedTab = props => {
  let json = [];
  if (props.categoryFeature.categoryFeature.p_cat === 1)
    json = props.categoryFeature.categoryFeature.p_beds;
  else if (props.categoryFeature.categoryFeature.p_cat === 3)
    json = props.categoryFeature.categoryFeature.p_beds;
  else if (props.categoryFeature.categoryFeature.p_cat === 4)
    json = props.categoryFeature.categoryFeature.p_beds;

  if (_.isEmpty(json)) return <div />;

  return (
    <React.Fragment>
      {loopBed(json, props.categoryFeature.categoryFeature.p_cat)}
    </React.Fragment>
  );
};

export default bedTab;
