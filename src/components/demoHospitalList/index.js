import React from "react";
import { Icon } from "semantic-ui-react";
import "./demo.css";

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
              {/* <div style={{ marginTop: "1em" }}>
                <p class="subtitle is-6">
                  5th Cross Street, #1220 24th Main Road, 1st Phase, JP Nagar
                  Bengaluru, Karnataka 560078
                </p>
              </div> */}
            </div>
          </div>
          <div>
            <div
              className="list-rating"
              style={{
                backgroundColor: "#f0f0f5",
                padding: "3px 0 3px 3px",
                marginRight: "3px",
                borderRadius: "3px"
              }}
            >
              <span
                style={{
                  color: "#23d160",
                  fontWeight: "700",
                  fontSize: "14px",
                  marginLeft: "3px",
                  marginRight: "3px"
                }}
              >
                3.5
              </span>
              <span>
                <i
                  class="fas fa-star"
                  style={{
                    color: "#23d160",

                    fontSize: "14px",
                    marginLeft: "3px",
                    marginRight: "3px"
                  }}
                />
                <i
                  class="fas fa-star"
                  style={{
                    color: "#23d160",

                    fontSize: "14px",
                    marginLeft: "3px",
                    marginRight: "3px"
                  }}
                />
                <i
                  class="fas fa-star"
                  style={{
                    color: "#23d160",

                    fontSize: "14px",
                    marginLeft: "3px",
                    marginRight: "3px"
                  }}
                />
                <i
                  class="fas fa-star-half-alt"
                  style={{
                    color: "#23d160",

                    fontSize: "14px",
                    marginLeft: "3px",
                    marginRight: "3px"
                  }}
                />

                <i
                  class="far fa-star"
                  style={{
                    color: "#23d160",

                    fontSize: "14px",
                    marginLeft: "3px",
                    marginRight: "3px"
                  }}
                />
              </span>
            </div>

            <div style={{ marginTop: "1em" }}>
              <p style={{ fontWeight: "300" }}>
                <i class="far fa-clock" />
                <span style={{ paddingLeft: "0.5em" }}>Open 24 x 7</span>
              </p>

              <p style={{ fontWeight: "300" }}>
                <i class="fas fa-map-marker-alt" />
                <span style={{ paddingLeft: "0.5em" }}>
                  Marathahalli, Bangalore
                </span>
              </p>

              <p style={{ fontWeight: "300" }}>
                <i class="far fa-credit-card" />
                <span style={{ paddingLeft: "0.5em" }}>
                  <del>&#x20b9;</del>
                  500
                </span>
              </p>
            </div>
          </div>
        </article>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            Save
          </a>
          <a href="#" class="card-footer-item">
            Edit
          </a>
          <div class="card-footer-item">
            <a class="button is-info is-medium">
              <span class="icon">
                <i class="fas fa-bolt" />
              </span>
              <span>Book Appointment</span>
            </a>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default demoList;
