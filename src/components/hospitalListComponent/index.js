import React from "react";

import HospitalFilter from "./hospitalFilterComponent/hospital-filter";
import HospitalCard from "./hospitalCardComponent/hospital-card";
import SeoLink from "./seoLinkComponent/seo-link";
import Filter from "../filterComponent";
import Banner from "../bannerComponent";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import "./static/css/index.css";
// import "../../../node_modules/bulma-divider";

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section class="section">
          <div class="container is-fullhd">
            <Banner />
          </div>
        </section>

        <section class="section">
          <div class="container is-fullhd">
            {/* <div class="is-divider" /> */}
            <Filter />
          </div>
        </section>

        <div class="container is-fullhd">
          <div class="columns">
            <div class="column is-3">
              <HospitalFilter />
            </div>
            <div class="column is-6">
              <HospitalCard />
            </div>
            <div class="column is-3">
              <SeoLink />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
