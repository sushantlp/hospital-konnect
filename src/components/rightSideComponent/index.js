import React from "react";

import "./right-side.css";

const RightSideComponent = props => {
  return (
    <React.Fragment>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src={props.thumbImage} alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p class="title is-4" style={{ fontWeight: "400" }}>
                {props.rightHeader}
              </p>
              <p class="subtitle is-6">{props.rightAddress}</p>

              {props.rightSpeciality === undefined ? null : (
                <p class="subtitle is-6">{props.rightSpeciality}</p>
              )}
            </div>

            {props.whichPackage === undefined ? null : (
              <hr className="spacer is-1" />
            )}

            {props.whichPackage === undefined ? null : (
              <p>
                <strong>{props.whichPackage}</strong>
                <br />
                {props.packageName}
              </p>
            )}

            <hr className="spacer is-1" />
            <p class="subtitle is-5">
              {props.feeTitle}
              {"  "}
              <span>
                <del>&#x20b9;</del>
                {props.rightCharge}
              </span>
            </p>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default RightSideComponent;
