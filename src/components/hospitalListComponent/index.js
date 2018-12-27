import React from "react";

import { Grid } from "semantic-ui-react";

import HospitalFilter from "./hospitalFilterComponent/hospital-filter";
import HospitalCard from "./hospitalCardComponent/hospital-card";
import SeoLink from "./seoLinkComponent/seo-link";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import "./static/css/index.css";

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="hospital-div">
          <Grid stackable>
            <Grid.Row style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}>
              <Grid.Column width={4}>
                <HospitalFilter />
              </Grid.Column>
              <Grid.Column width={8}>
                <HospitalCard />
              </Grid.Column>
              <Grid.Column width={4}>
                <SeoLink />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
