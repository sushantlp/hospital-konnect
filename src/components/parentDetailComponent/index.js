import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import Card from "../cardDetailComponent";
import Seo from "../seoComponent";
import Tab from "../tabComponent";

import "./parent-detail.css";

export default class ParentDetail extends React.Component {
  constructor(props) {
    super(props);
    //const splitArray = this.props.location.search.split("&");
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

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
