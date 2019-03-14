import React from "react";

import { Grid } from "semantic-ui-react/dist/commonjs";

import SeoLink from "../hospitalListComponent/seoLinkComponent/seo-link";
import HospitalDetailCard from "./hospitalDetailCardComponent/hospital-detail-card";
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
            <Grid.Row>
              <Grid.Column />
              <Grid.Column>
                <HospitalDetailCard />
              </Grid.Column>
              <Grid.Column>
                <SeoLink />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <div className="twelve">
                <HospitalTab />
              </div>
            </Grid.Row>              
          </Grid>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}
