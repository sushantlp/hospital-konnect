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
    const splitArray = this.props.location.search.split("&");

    if (splitArray.length < 2) {
      this.state = {
        partner: 0,
        category: 0
      };
    } else {
      const partnerArray = splitArray[0].split("=");
      const categoryArray = splitArray[1].split("=");

      this.state = {
        partner: parseInt(partnerArray[1], 10),
        category: parseInt(categoryArray[1], 10)
      };
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.getCategoryFeature(this.state.partner);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <section class="section">
          <div class="columns">
            <div class="column is-9">
              <Card
                categoryFeature={this.props.categoryFeature}
                // parentState={this.state}
              />
              <div class="section">
                <Tab
                  categoryFeature={this.props.categoryFeature}
                  // parentState={this.state}
                  // parentProps={this.props}
                />
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
