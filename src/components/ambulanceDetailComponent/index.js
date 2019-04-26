import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";

import "./ambulance-detail.css";

export default class AmbulanceDetail extends React.Component {
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
