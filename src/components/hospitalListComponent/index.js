import React from "react";
import _ from "lodash";
import { Redirect } from "react-router-dom";

import Same from "../sameComponent";
import Filter from "../filterComponent";
import Banner from "../bannerComponent";
import CardList from "../cardListComponent";

import Spinner from "../spinnerComponent";

import "./hospital-list.css";

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      original_set: [],
      filter_set: [],
    };
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryList !== nextProps.categoryList) {
      this.setState({
        original_set: nextProps.categoryList,
        filter_set: nextProps.categoryList
      })
    }
  }

  filterApply = (param) => {
    console.log(param)
  }

  render() {

    if (this.props.categoryList.status === "START") return <Spinner />;
    else if (this.props.categoryList.status === "FAIL") return <Spinner />;

    if (this.props.parentState.page === 1)
      if (_.isEmpty(this.props.categoryList.categoryList)) {
        return <Redirect to="/web/" />;
      }

    return (
      <React.Fragment>
        <section class="section">
          <div class="container is-fullhd">
            <Banner />
          </div>
        </section>

        <div class="container">
          <Filter transistor={false} filterList={this.props.filterList} />
        </div>

        <section class="section">
          <div class="columns">
            <div class="column is-9">
              <CardList
                categoryList={this.state.filter_set}
                category={1}
                parentProps={this.props.parentProps}
                parentState={this.props.parentState}
                loadMoreDataApiCall={this.props.loadMoreDataApiCall}
                postMobileRegister={this.props.postMobileRegister}
                mobileRegister={this.props.mobileRegister}
                postOtpVerify={this.props.postOtpVerify}
                otpVerify={this.props.otpVerify}
              />
            </div>
            <div class="column is-3">
              <Same
                sideBarList={this.props.sideBarList}
                parentState={this.props.parentState}
                parentProps={this.props.parentProps}
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
