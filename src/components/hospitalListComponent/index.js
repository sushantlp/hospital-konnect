import React from "react";

import Same from "../sameComponent";
import Filter from "../filterComponent";
import Banner from "../bannerComponent";
import Seo from "../seoComponent";
import CardList from "../cardListComponent";

import "./hospital-list.css";

export default class Index extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.parentProps);
    return (
      <React.Fragment>
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
              <CardList
                categoryList={this.props.categoryList}
                category={1}
                parentProps={this.props.parentProps}
                parentState={this.props.parentState}
                loadMoreDataApiCall={this.props.loadMoreDataApiCall}
              />
            </div>
            <div class="column is-3">
              <Seo />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
