import React from "react";

import Same from "../sameComponent";
import Filter from "../filterComponent";
import Banner from "../bannerComponent";
import CardList from "../cardListComponent";

import "./ambulance-list.css";

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section class="section">
          <div class="container is-fullhd">
            <Banner />
          </div>
        </section>

        <div class="container">
          <Filter transistor={true} filterList={this.props.filterList} amenities_checkbox={[]}
          price_checkbox={[]}/>
        </div>

        <section class="section">
          <div class="columns">
            <div class="column is-9">
              <CardList
                categoryList={this.props.categoryList}
                category={1}
                parentProps={this.props.parentProps}
                parentState={this.props.parentState}
                loadMoreDataApiCall={this.props.loadMoreDataApiCall}
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
