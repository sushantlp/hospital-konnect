import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";

import "./appointment.css";
import "bulma-calendar/dist/css/bulma-calendar.min.css";
import "bulma-calendar/dist/js/bulma-calendar.min.js";

export default class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <React.Fragment>
        <Header />
        <section class="section">
          <div class="container">
            <div class="columns">
              <div class="column">
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
                          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                          Ipsum
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

                <input type="date" />
              </div>
              <div class="column ">
                <p class="title is-4" style={{ color: "#414146" }}>
                  Confirm Appointment
                </p>
                <div class="field">
                  <label class="label" style={{ fontWeight: "400" }}>
                    Patient/Visitor First Name
                  </label>
                  <div class="control">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label" style={{ fontWeight: "400" }}>
                    Patient/Visitor Last Name
                  </label>
                  <div class="control">
                    <input
                      class="input is-large"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label" style={{ fontWeight: "400" }}>
                    Email
                  </label>
                  <div class="control">
                    <input
                      class="input is-large"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label" style={{ fontWeight: "400" }}>
                    Mobile
                  </label>
                  <div class="control">
                    <input
                      class="input is-large"
                      type="email"
                      placeholder="Mobile"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label" style={{ fontWeight: "400" }}>
                    Department
                  </label>
                  <div class="control">
                    <div class="select is-medium">
                      <select>
                        <option>department1</option>
                        <option>department2</option>
                        <option>department3</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label" style={{ fontWeight: "400" }}>
                    Payment Mode
                  </label>
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="question" />
                      Pay online
                    </label>
                    <label class="radio">
                      <input type="radio" name="question" />
                      Pay later
                    </label>
                  </div>
                </div>
                <div className="appointment-button">
                  <button class="button is-large is-fullwidth">CONFIRM</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
