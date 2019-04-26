import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";

import "./air-ambulance.css";

export default class AirAmbulanceDetail extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="columns">
          <div className="column">
            {/* <AmbulanceDetailCard />
            <AmbulanceTab /> */}
          </div>
          <div className="column is-one-third">{/* <SeoLink /> */}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
