import React from "react";

import HospitalCard from "./hospitalCardComponent/hospital-card";

// import SeoLink from "./seoLinkComponent/seo-link";
import Same from "../sameComponent";
import Filter from "../filterComponent";
import Banner from "../bannerComponent";
import Seo from "../seoComponent";
import CardList from "../cardListComponent";
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

        <div class="container">
          <Filter />
        </div>

        <section class="section">
          <div class="columns">
            <div class="column is-3">
              <Same />
            </div>
            <div class="column is-6">
              <CardList />
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
