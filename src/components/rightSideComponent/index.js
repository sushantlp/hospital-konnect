import React from "react";

import "./right-side.css";

const RightSideComponent = props => {
  return (
    <React.Fragment>
    <div className="right-side-box">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-200x200">
              <img src={props.thumbImage} alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p class="title is-4">
                {props.rightHeader}
              </p>
              <p class="subtitle is-6" style={{color: "black"}}>{props.rightAddress}</p>

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
              <span style={{fontWeight: "bold"}}>
                <del>&#x20b9;</del>
                {props.rightCharge}
              </span>
            </p>
          </div>
        </article>
      </div>
      </div>
    </React.Fragment>
  );
};

export default RightSideComponent;
