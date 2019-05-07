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

    if (splitArray.length < 3) {
      this.state = {
        partner: 0,
        category: 0,
        flag: "true",
        open: false
      };
    } else {
      const partnerArray = splitArray[0].split("=");
      const categoryArray = splitArray[1].split("=");
      const flagArray = splitArray[2].split("=");

      this.state = {
        partner: parseInt(partnerArray[1], 10),
        category: parseInt(categoryArray[1], 10),
        flag: flagArray[1],
        open: false
      };
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.getCategoryFeature(this.state.partner);
  }

  updateOpenState = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <section class="section">
          <div class="columns">
            <div class="column is-9">
              <Card
                categoryFeature={this.props.categoryFeature}
                open={this.state.open}
                updateOpenState={this.updateOpenState}
              />
              <div class="section">
                <Tab
                  categoryFeature={this.props.categoryFeature}
                  flag={this.state.flag}
                  category={this.state.category}
                  open={this.state.open}
                  updateOpenState={this.updateOpenState}
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
