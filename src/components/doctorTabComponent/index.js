import React from "react";
import _ from "lodash";

import "./doctor-tab.css";

const drawDoctor = (key, title, name, image, experience, about, obj) => {
  return (
    <div class="box" key={key}>
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              src="https://d3wnzga3fpd9a.cloudfront.net/photos/Dr-Keith-Khuu-DDS-6768-circle_medium.png"
              alt={title + " " + name + " " + about}
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="subtitle is-4" style={{ marginBottom: "0.2em" }}>
              {name}
            </p>
            <p class="subtitle is-6" style={{ marginBottom: "0.2em" }}>
              {title}
            </p>
            <p class="subtitle is-6">{experience}</p>

            <p class="subtitle is-6 has-text-justified">{about}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

const loopDoctor = (object, category) => {
  return object.map((obj, key) => {
    return drawDoctor(
      obj.d_id,
      obj.d_title,
      obj.d_name,
      obj.d_image,
      obj.d_experience,
      obj.d_about,
      obj
    );
  });
};

const doctorTab = props => {
  console.log(props);

  let json = [];
  if (props.parentState.category === 1)
    json = props.categoryFeature.categoryFeature.p_doctors;

  if (_.isEmpty(json)) return <div />;

  return (
    <React.Fragment>
      {loopDoctor(json, props.parentState.category)}
    </React.Fragment>
  );
};

export default doctorTab;
