import React from "react";

import "./same.css";

export default class Same extends React.Component {
  render() {
    return (
      <div
        class="panel-block"
        style={{
          borderTop: "0px",
          borderBottom: "0px",
          borderRight: "0px",
          borderLeft: "0px"
        }}
      >
        <div class="container">
          <div class="card">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_600/v1555913883/ballyhoo/BALLYHOO_WEBSITE/same-2.jpg"
                alt="Placeholder image"
              />
            </div>
            <div class="card-content">
              <div class="content">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
          <hr className="spacer is-1" />
          <div class="card">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_600/v1555913883/ballyhoo/BALLYHOO_WEBSITE/same-2.jpg"
                alt="Placeholder image"
              />
            </div>
            <div class="card-content">
              <div class="content">Lorem ipsum dolor sit amet</div>
            </div>
          </div>

          <hr className="spacer is-1" />
          <div class="card">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_600/v1555913883/ballyhoo/BALLYHOO_WEBSITE/same-2.jpg"
                alt="Placeholder image"
              />
            </div>
            <div class="card-content">
              <div class="content">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
          <hr className="spacer is-1" />
          <div class="card">
            <div class="card-image">
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_600/v1555922237/ballyhoo/BALLYHOO_WEBSITE/same-4.jpg"
                alt="Placeholder image"
              />
            </div>
            <div class="card-content">
              <div class="content">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
