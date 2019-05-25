import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";

import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import moment from "moment-timezone";
import "./appointment.css";

export default class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("HH:mm"),
      date: new Date()
    };
  }

  componentWillReceiveProps(nextProps) {}

  onChangeTime = e => {
    console.log(e);
  };

  onChangeDate = e => {
    console.log(e);
  };

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

                <section class="section">
                  <DatePicker
                    onChange={event => this.onChangeDate(event)}
                    value={this.state.date}
                  />
                  <TimePicker
                    onChange={event => this.onChangeTime(event)}
                    value={this.state.time}
                  />
                </section>
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
                      type="text"
                      placeholder="Mobile"
                    />
                  </div>
                </div>

                <hr className="spacer is-1" />

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

                <hr className="spacer is-1" />

                <div class="field">
                  <label class="label" style={{ fontWeight: "400" }}>
                    Choose a payment option to Book Appointment
                  </label>

                  <div class="field">
                    <input
                      class="is-checkradio"
                      id="Pay-online"
                      type="radio"
                      name="exampleRadioInline"
                      checked="checked"
                    />
                    <label for="Pay-online">Pay online</label>
                    <input
                      class="is-checkradio"
                      id="Pay-later"
                      type="radio"
                      name="exampleRadioInline"
                    />
                    <label for="Pay-later">Pay later</label>
                  </div>
                </div>

                <hr className="spacer is-2" />
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
