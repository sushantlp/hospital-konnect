import React from "react";

import { Grid, Container } from "semantic-ui-react/dist/commonjs";

import SeoLink from "../hospitalListComponent/seoLinkComponent/seo-link";
import HospitalCard from "./hospitalCardComponent/hospital-card";
import HospitalTab from "./hospitalTabComponent/hospital-tab";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import "./static/css/index.css";

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="hospital-detail-div">
          <Grid stackable>
            <Grid.Row style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}>
              <Grid.Column width={1} />
              <Grid.Column width={11}>
                <HospitalCard />
                <HospitalTab />
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
