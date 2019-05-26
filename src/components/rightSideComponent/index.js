import React from "react";

import "./right-side.css";

const RightSideComponent = props => {
  return (
    <React.Fragment>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img
                src="http://res.cloudinary.com/dp67gawk6/image/upload/w_128,h_128,c_fill,g_center/v1557205909/HK/PartnerImage/partner_24/image_1.jpg"
                alt="Image"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p class="title is-4" style={{ fontWeight: "400" }}>
                Apollo City Hospital
              </p>
              <p class="subtitle is-6">JP Nagar, Bangalore</p>
              <p class="subtitle is-6">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </p>
            </div>

            <hr className="spacer is-1" />
            <p class="subtitle is-5">
              Consultation fees:{"  "}
              <span>
                <del>&#x20b9;</del>300
              </span>
            </p>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default RightSideComponent;
