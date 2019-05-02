import React from "react";

const demoList = props => {
  return (
    <React.Fragment>
      <div class="box" style={{ lineHeight: "1.66667" }}>
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img
                src="http://res.cloudinary.com/dp67gawk6/image/upload/w_128,h_128,c_fill,g_center/v1556628143/HK/logos/partner_1.jpg"
                alt=""
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p class="title is-4" style={{ fontWeight: "400" }}>
                Manipal Hospital
              </p>
              <p class="subtitle is-6">Multi-SpecialityHospital</p>
              <p>155 Doctors</p>

              <div>
                <span style={{ cursor: "pointer", paddingLeft: "0.5em" }}>
                  <img
                    style={{ borderRadius: "5px" }}
                    src="https://images1-fabric.practo.com/manipal-hospital-bangalore-1481708155-5851127b1ff31.jpg/36x36"
                    alt=""
                  />
                </span>

                <span style={{ cursor: "pointer", paddingLeft: "0.5em" }}>
                  <img
                    style={{ borderRadius: "5px" }}
                    src="https://images1-fabric.practo.com/practices/630200/manipal-hospital-bangalore-5b90c08f86548.jpg/36x36"
                    alt=""
                  />
                </span>

                <span style={{ cursor: "pointer", paddingLeft: "0.5em" }}>
                  <img
                    style={{ borderRadius: "5px" }}
                    src="https://images1-fabric.practo.com/practices/630200/manipal-hospital-bangalore-5b90c0871affc.jpg/36x36"
                    alt=""
                  />
                </span>

                <span style={{ cursor: "pointer", paddingLeft: "0.5em" }}>
                  <img
                    style={{ borderRadius: "5px" }}
                    src="https://images1-fabric.practo.com/practices/630200/manipal-hospital-bangalore-5b90c08f86548.jpg/36x36"
                    alt=""
                  />
                </span>
              </div>

              <div style={{ marginTop: "0.5em" }}>
                <span class="tag" style={{ fontWeight: "400" }}>
                  Cardiology
                </span>
                <span class="tag" style={{ fontWeight: "400" }}>
                  Urology
                </span>
                <span class="tag" style={{ fontWeight: "400" }}>
                  Dermatology
                </span>
              </div>
            </div>
          </div>
          <div>
            <p class="buttons ">
              <a class="button is-info is-medium">
                <span class="icon">
                  <i class="fas fa-bolt" />
                </span>
                <span>Book Now</span>
              </a>

              <a class="button is-info is-medium">
                <span class="icon">
                  <i class="fas fa-phone-square" />
                </span>
                <span />
              </a>
            </p>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default demoList;
