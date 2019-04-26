import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";

import "./static/css/nursing-detail.css";

export default class NursingDetail extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="columns">
          <div className="column">
            {/* <NursingDetailCard />
            <NursingTab /> */}
          </div>
          <div className="column is-one-third">{/* <SeoLink /> */}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
