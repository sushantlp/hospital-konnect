import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import RightSide from "../rightSideComponent";
import LeftSide from "../leftSideComponent";
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

  componentWillMount() {
    window.scrollTo(0, 0);
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
                <RightSide />
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
                <LeftSide />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
