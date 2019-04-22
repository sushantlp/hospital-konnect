import React from "react";
// import SeoLink from "../hospitalListComponent/seoLinkComponent/seo-link";
import NursingDetailCard from "./nursingDetailCardComponent/nursing-detail-card";
import NursingTab from "./nursingTabComponent/nursing-tab";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";

import "./static/css/index.css";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="columns">
          <div className="column">
            <NursingDetailCard />
            <NursingTab />
          </div>
          <div className="column is-one-third">{/* <SeoLink /> */}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
