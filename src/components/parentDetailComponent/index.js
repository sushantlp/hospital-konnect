import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import Card from "../cardDetailComponent";
import Seo from "../seoComponent";
import Tab from "../tabComponent";
import Banner from "../bannerComponent";

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

        authOpen: false,
        bedOpen: false,
        photoIndex: 0,
        lightBox: false,
        bundleImage: []
      };
    } else {
      const partnerArray = splitArray[0].split("=");
      const categoryArray = splitArray[1].split("=");
      const flagArray = splitArray[2].split("=");

      this.state = {
        partner: parseInt(partnerArray[1], 10),
        category: parseInt(categoryArray[1], 10),
        flag: flagArray[1],

        authOpen: false,
        photoIndex: 0,
        lightBox: false,
        bundleImage: []
      };
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.getCategoryFeature(this.state.partner);
    this.props.getSeoUrl(this.state.partner);
  }

  updateOpenState = bool => {
    console.log("Open fuckers");
    this.setState({
      authOpen: bool
    });
  };

  updateBedOpenState = () => {
    this.setState({
      bedOpen: !this.state.bedOpen
    });
  };

  intializeImageArray = (imageArray, bool) => {
    this.setState({ lightBox: bool, bundleImage: imageArray });
  };

  movePrevRequest = (photoIndex, bundleImage) => {
    this.setState({
      photoIndex: (photoIndex + bundleImage - 1) % bundleImage
    });
  };

  moveNextRequest = (photoIndex, bundleImage) => {
    this.setState({
      photoIndex: (photoIndex + 1) % bundleImage
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />

        {/* <section class="section">
          <div class="container is-fullhd">
            <Banner />
          </div>
        </section> */}

        <section class="section">
          <div class="columns">
            <div class="column is-9">
              <Card
                categoryFeature={this.props.categoryFeature}
                authOpen={this.state.authOpen}
                photoIndex={this.state.photoIndex}
                lightBox={this.state.lightBox}
                bundleImage={this.state.bundleImage}
                updateOpenState={this.updateOpenState}
                intializeImageArray={this.intializeImageArray}
                movePrevRequest={this.movePrevRequest}
                moveNextRequest={this.moveNextRequest}
                postMobileRegister={this.props.postMobileRegister}
                mobileRegister={this.props.mobileRegister}
                postOtpVerify={this.props.postOtpVerify}
                otpVerify={this.props.otpVerify}
                history={this.props.history}
              />
              <div class="section">
                <Tab
                  categoryFeature={this.props.categoryFeature}
                  flag={this.state.flag}
                  category={this.state.category}
                  open={this.state.open}
                  updateOpenState={this.updateOpenState}
                  bedOpen={this.state.bedOpen}
                  updateBedOpenState={this.updateBedOpenState}
                />
              </div>
            </div>
            <div class="column is-3">
              <Seo seoUrlList={this.props.seoUrlList} />
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
