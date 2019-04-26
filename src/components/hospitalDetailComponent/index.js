import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import Card from "../cardDetailComponent";
import Seo from "../seoComponent";
import Tab from "../tabComponent";
import "./hospital-detail.css";

export default class HospitalDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section class="section">
          <div class="columns">
            <div class="column is-9">
              <Card />
              <div class="section">
                <Tab />
              </div>
            </div>
            <div class="column is-3">
              <Seo />
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
