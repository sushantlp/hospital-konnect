import React from "react";

import { Grid } from "semantic-ui-react";

import HospitalFilter from "./hospitalFilterComponent/hospital-filter";
import HospitalCard from "./hospitalCardComponent/hospital-card";
// import SeoLink from "./seoLinkComponent/seo-link";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import "./static/css/index.css";

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="hospital-div">
          <div className="columns">
            <div className="column is-3">
              <HospitalFilter />
            </div>
            <Grid.Column className="column is-7">
              <HospitalCard />
            </Grid.Column>
            <Grid.Column className="column is-2">
              {/* <SeoLink /> */}
            </Grid.Column>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
