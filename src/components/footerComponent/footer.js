import React from "react";

import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="app-footer section is-medium">
        <div class="container">
          <div class="columns">
            <div class="column is-5 is-4-widescreen">
              <div className="footer-rightside-summary">
                <a className="brand" href="/">
                  <div className="brand-icon">
                    <img
                      alt="Hospital Konnect - Just Konnect"
                      role="presentation"
                      src="https://res.cloudinary.com/dp67gawk6/image/upload/v1557299534/HK/hk-logo.jpg"
                    />
                  </div>
                  <div className="brand-content">
                    <div className="brand-title"> Hospital Konnect </div>
                    <div className="brand-subtitle">Just Konnect</div>
                  </div>
                </a>
                <hr className="spacer is-1" />
                <p>
                  The storytelling app for families - read diverse &amp;
                  empowering stories or tell them in your own words.
                </p>
                <hr className="spacer is-1" />

                <a
                  href="https://itunes.apple.com/us/app/bedtime-stories-read-tell/id1231933548"
                  class="app-store-badge"
                  target="_blank"
                >
                  <img
                    role="presentation"
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_40,w_120/v1481790564/ballyhoo/EMAIL/appstore1.png"
                  />
                </a>

                <a
                  href="https://itunes.apple.com/us/app/bedtime-stories-read-tell/id1231933548"
                  class="app-store-badge"
                  target="_blank"
                  style={{ marginLeft: "0.5em" }}
                >
                  <img
                    role="presentation"
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_40,w_120/v1481790565/ballyhoo/EMAIL/playstore1.png"
                  />
                </a>
              </div>
            </div>
            <div class="column is-7 is-6-widescreen is-offset-2-widescreen">
              <div class="columns">
                {/* <div class="column">
                  <div class="menu">
                     <p class="menu-label"> For partners </p>
                    <ul class="menu-list">
                      <li>
                        <a href="/">Search for doctors</a>
                      </li>
                      <li>
                        <a href="/">Search for clinics</a>
                      </li>
                      <li>
                        <a href="/">Search for hospitals</a>
                      </li>
                    </ul> 
                  </div>
                </div> */}
                <div class="column">
                  <div class="menu">
                    <p class="menu-label"> Company </p>
                    <ul class="menu-list">
                      <li>
                        <a href="/">About Hospital Konnect</a>
                      </li>
                      <li>
                        <a href="/">Terms and Condition</a>
                      </li>
                      <li>
                        <a href="/">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/">Contact Us</a>
                      </li>
                      <li>
                        <a href="/">Faq</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="column">
                  <div class="menu">
                    <p class="menu-label"> Connect with us </p>
                    <ul class="menu-list">
                      <li>
                        <a
                          href="https://facebook.com/getbedtimestories"
                          target="_blank"
                        >
                          <img
                            role="presentation"
                            src="https://getbedtimestories.com/assets/images/icons/social/facebook-f18752b0.svg?1553506572"
                          />
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://facebook.com/getbedtimestories"
                          target="_blank"
                        >
                          <img
                            role="presentation"
                            src="https://getbedtimestories.com/assets/images/icons/social/instagram-89cb51bf.svg?1553506572"
                          />
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://facebook.com/getbedtimestories"
                          target="_blank"
                        >
                          <img
                            role="presentation"
                            src="https://getbedtimestories.com/assets/images/icons/social/twitter-42c2f562.svg?1553506572"
                          />
                          Twitter
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href="https://facebook.com/getbedtimestories"
                          target="_blank"
                        >
                          <img
                            role="presentation"
                            src="https://getbedtimestories.com/assets/images/icons/social/messenger-d2bb944d.svg?1553506572"
                          />
                          Messenger
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="content has-text-centered">
            <p>
              Copyright © 2019, <strong>Hospital konnect</strong> All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
