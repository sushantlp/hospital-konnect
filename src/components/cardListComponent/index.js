import React from "react";

import "./card-list.css";

export default class CardList extends React.Component {
  render() {
    return (
      <div>
        {/* <Segment> */}
        <div class="panel-block">
          <div class="container">
            <div class="card">
              <div className="card-list">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-128x128">
                        <img
                          src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_128,w_128/v1555933889/ballyhoo/BALLYHOO_WEBSITE/profile-1.jpg"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <p class="title is-4"> People Tree Hospitals</p>
                      <p class="subtitle is-6">Multi-Speciality Hospital</p>
                      <span className="card-locality-fee">
                        <p class="subtitle is-5">Jp Nagar</p>
                        <p class="subtitle is-6">Open 24 hours</p>
                      </span>
                    </div>
                  </div>

                  <div class="content">
                    5th Cross Street, #1220, 24th Main Road, 1st Phase, JP
                    Nagar, Bengaluru, Karnataka 560078
                  </div>

                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">
                      08071966843
                    </a>

                    <a href="#" class="card-footer-item">
                      View profile
                    </a>
                  </footer>
                </div>
              </div>
            </div>

            <hr className="spacer is-1" />

            <div class="card">
              <div className="card-list">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-128x128">
                        <img
                          src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_128,w_128/v1555933889/ballyhoo/BALLYHOO_WEBSITE/profile-1.jpg"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div class="content">
                      <p class="title is-4"> People Tree Hospitals</p>
                      <p class="subtitle is-6">Multi-Speciality Hospital</p>
                      <span className="card-locality-fee">
                        <p class="subtitle is-5">Jp Nagar</p>
                        <p class="subtitle is-6">Open 24 hours</p>
                      </span>
                    </div>
                  </div>

                  <div class="content">
                    5th Cross Street, #1220, 24th Main Road, 1st Phase, JP
                    Nagar, Bengaluru, Karnataka 560078
                  </div>

                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">
                      08071966843
                    </a>

                    <a href="#" class="card-footer-item">
                      View profile
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Segment> */}
      </div>
    );
  }
}
