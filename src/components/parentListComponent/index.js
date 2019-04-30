import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";
import HospitalList from "../hospitalListComponent";
import NursingList from "../nursingListComponent";
import EquipmentList from "../equipListComponent";
import AmbulanceList from "../ambulanceListComponent";

import "./parent-list.css";

export default class ParentList extends React.Component {
  constructor(props) {
    super(props);
    const splitArray = this.props.location.search.split("&");

    if (splitArray.length < 5) {
      this.state = {
        city: 0,
        locality: 0,
        type: 0,
        category: 0,
        q: 0,
        page: 1
      };
    } else {
      const cityArray = splitArray[0].split("=");
      const localityArray = splitArray[1].split("=");
      const typeArray = splitArray[2].split("=");
      const categoryArray = splitArray[3].split("=");
      const qArray = splitArray[4].split("=");

      this.state = {
        city: parseInt(cityArray[1], 10),
        locality: parseInt(localityArray[1], 10),
        type: parseInt(typeArray[1], 10),
        category: parseInt(categoryArray[1], 10),
        q: parseInt(qArray[1], 10),
        page: 1
      };
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.getCategoryList(
      this.state.city,
      this.state.locality,
      this.state.q,
      this.state.type,
      this.state.page,
      true
    );

    if (this.state.category === 1) this.props.getFilterList();
  }

  // Load More Category List Data
  loadMoreDataApiCall = page => {
    this.props.getCategoryList(
      this.state.city,
      this.state.locality,
      this.state.q,
      this.state.type,
      page,
      false
    );
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.category === 1 ? (
          <HospitalList
            categoryList={this.props.categoryList}
            filterList={this.props.filterList}
            parentProps={this.props}
            parentState={this.state}
            loadMoreDataApiCall={this.loadMoreDataApiCall}
          />
        ) : null}
        {this.state.category === 2 ? (
          <AmbulanceList
            categoryList={this.props.categoryList}
            parentProps={this.props}
            parentState={this.state}
            loadMoreDataApiCall={this.loadMoreDataApiCall}
          />
        ) : null}
        {this.state.category === 3 ? (
          <EquipmentList
            categoryList={this.props.categoryList}
            parentProps={this.props}
            parentState={this.state}
            loadMoreDataApiCall={this.loadMoreDataApiCall}
          />
        ) : null}
        {this.state.category === 4 ? (
          <NursingList
            categoryList={this.props.categoryList}
            parentProps={this.props}
            parentState={this.state}
            loadMoreDataApiCall={this.loadMoreDataApiCall}
          />
        ) : null}
        <Footer />
      </React.Fragment>
    );
  }
}
