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

      price_checkbox: [],
      amenities_checkbox: []
    };
  }
  componentWillMount() {
    window.scrollTo(0, 0);

    this.setState({
      original_set: this.props.categoryList,
      filter_set: this.props.categoryList
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryList !== nextProps.categoryList) {
      this.setState({
        original_set: nextProps.categoryList,
        filter_set: nextProps.categoryList
      });
    }
  }

  filterPricesPush = (e, obj) => {
    this.pricesPushLogic(e.target.checked, obj, this.state.price_checkbox);
  };

  pricesPushLogic = (bool, pushValue, obj) => {
    if (bool) {
      obj.push(pushValue);
      this.setState({ price_checkbox: obj });
    } else {
      const filter = obj.filter(id => id.label !== pushValue.label);
      this.setState({ price_checkbox: filter });
    }
  };

  filterAmenitiesPush = (e, obj) => {
    this.amenitiesPushLogic(
      e.target.checked,
      obj,
      this.state.amenities_checkbox
    );
  };

  amenitiesPushLogic = (bool, pushValue, obj) => {
    if (bool) {
      obj.push(pushValue);
      this.setState({ amenities_checkbox: obj });
    } else {
      const filter = obj.filter(id => id.amenity_id !== pushValue.amenity_id);
      this.setState({ amenities_checkbox: filter });
    }
  };

  onClearAll = () => {
    if (this.state.price_checkbox !== 0 || this.state.amenities_checkbox !== 0)
      this.setState({
        filter_set: this.state.original_set,
        price_checkbox: [],
        amenities_checkbox: []
      });
  };

  render() {
    return (
      <React.Fragment>
        <section class="section">
          <div class="container is-fullhd">
            <Banner />
          </div>
        </section>

        <div class="container">
          <Filter
            transistor={false}
            filterList={this.props.filterList}
            filterPricesPush={this.filterPricesPush}
            filterAmenitiesPush={this.filterAmenitiesPush}
            amenities_checkbox={this.state.amenities_checkbox}
            price_checkbox={this.state.price_checkbox}
            onClearAll={this.onClearAll}
          />
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
