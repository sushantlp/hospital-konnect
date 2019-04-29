import React from "react";

import "./overview-tab.css";

const overviewTab = props => {
  const object = props.categoryFeature.categoryFeature;
  return (
    <div className="overview-container">
      <p class="subtitle is-4" style={{ marginBottom: "0.2em" }}>
        About
      </p>
      <p class="subtitle is-6 has-text-justified">{object.p_short_desc}</p>
      <p class="subtitle is-4" style={{ marginBottom: "0.2em" }}>
        Address
      </p>
      <p class="subtitle is-6 has-text-justified">
        {object.p_address.address_line_1 +
          " " +
          object.p_address.address_line_2 +
          " " +
          object.p_address.address_line_3}
      </p>

      {object.p_cat === 1 ? (
        object.p_hours.length === 0 ? null : (
          <p class="subtitle is-4" style={{ marginBottom: "0.2em" }}>
            Working Hours
          </p>
        )
      ) : null}

      {object.p_cat === 1 ? (
        <div class="tags are-medium">
          {object.p_hours.map((obj, key) => {
            return (
              <span class="tag is-info" key={key}>
                {obj.day + " " + obj.from_time + " " + obj.to_time}
              </span>
            );
          })}
        </div>
      ) : null}

      {object.p_other_contacts.length === 0 ? null : (
        <p class="subtitle is-4" style={{ marginBottom: "0.5em" }}>
          Contact Number
        </p>
      )}

      {object.p_other_contacts.length === 0 ? null : (
        <div class="tags are-medium">
          {object.p_other_contacts.map((obj, key) => {
            return (
              <span class="tag is-info" key={key}>
                {obj}
              </span>
            );
          })}
        </div>
      )}

      {object.p_cat !== 7 ? (
        object.p_online_pay_opt.length === 0 ? null : (
          <p class="subtitle is-4" style={{ marginBottom: "0.5em" }}>
            Modes of Payment
          </p>
        )
      ) : null}

      {object.p_cat !== 7 ? (
        object.p_online_pay_opt.length === 0 ? null : (
          <div class="tags are-medium">
            {object.p_online_pay_opt.map((obj, key) => {
              return (
                <span class="tag is-info" key={key}>
                  {obj}
                </span>
              );
            })}
          </div>
        )
      ) : null}

      {object.p_cat === 1 || object.p_cat === 4 ? (
        object.p_services.length === 0 ? null : (
          <p class="subtitle is-4" style={{ marginBottom: "0.5em" }}>
            Services
          </p>
        )
      ) : null}

      {object.p_cat === 1 || object.p_cat === 4 ? (
        object.p_services.length === 0 ? null : (
          <div class="tags are-medium">
            {object.p_services.map((obj, key) => {
              return (
                <span class="tag is-info" key={key}>
                  {obj.service}
                </span>
              );
            })}
          </div>
        )
      ) : null}

      {object.p_cat === 1 ? (
        object.p_specialities.length === 0 ? null : (
          <p class="subtitle is-4" style={{ marginBottom: "0.5em" }}>
            Specialists
          </p>
        )
      ) : null}

      {object.p_cat === 1 ? (
        object.p_specialities.length === 0 ? null : (
          <div class="tags are-medium">
            {object.p_specialities.map((obj, key) => {
              return (
                <span class="tag is-info" key={key}>
                  {obj.speciality}
                </span>
              );
            })}
          </div>
        )
      ) : null}

      <p class="subtitle is-4" style={{ marginBottom: "0.2em" }}>
        Detail
      </p>
      <p class="subtitle is-6 has-text-justified">{object.p_full_desc}</p>
    </div>
  );
};

export default overviewTab;
