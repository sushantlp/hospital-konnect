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
    const cityArray = splitArray[0].split("=");
    const localityArray = splitArray[1].split("=");
    const typeArray = splitArray[2].split("=");
    const categoryArray = splitArray[3].split("=");

    this.state = {
      city: parseInt(cityArray[1], 10),
      locality: parseInt(localityArray[1], 10),
      type: parseInt(typeArray[1], 10),
      category: parseInt(categoryArray[1], 10),
      page: 1
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.getCategoryList(
      this.state.city,
      this.state.locality,
      this.state.category,
      this.state.type,
      this.state.page,
      true
    );
  }

  render() {
    console.log(this.props.categoryList);
    return (
      <React.Fragment>
        <Header />
        {this.state.category === 1 ? (
          <HospitalList
            hospitalList={this.props.categoryList}
            parent={this.props}
          />
        ) : null}
        {this.state.category === 2 ? (
          <AmbulanceList
            ambulanceList={this.props.categoryList}
            parent={this.props}
          />
        ) : null}
        {this.state.category === 3 ? (
          <EquipmentList
            equipmentList={this.props.categoryList}
            parent={this.props}
          />
        ) : null}
        {this.state.category === 4 ? (
          <NursingList
            nursingList={this.props.categoryList}
            parent={this.props}
          />
        ) : null}
        <Footer />
      </React.Fragment>
    );
  }
}
