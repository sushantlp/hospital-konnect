import React from "react";

import Footer from "../footerComponent/footer";
import Search from "./searchComponent/search";
import Specialization from "./specializationComponent/specialization";
import Hospital from "./hospitalComponent/hospital";
import Ambulance from "./ambulanceComponent/ambulance";
import AirAmbulance from "./airAmbulanceComponent/airAmbulance";
import Nursing from "./nursingComponent/nursing";
import Equipment from "./equipmentComponent/equipment";

export default class Animation extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getCityLocality();
    this.props.getHomeDetail(1);
    this.props.getWallImage();
    this.props.getKeywordSearch();
  }

  changeCityApiCall = cityId => {
    this.props.getHomeDetail(cityId);
  };

  render() {
    return (
      <React.Fragment>
        <Search
          cityLocality={this.props.cityLocality}
          wallImage={this.props.wallImage}
          keywordSearch={this.props.keywordSearch}
          changeCityApiCall={this.changeCityApiCall}
        />
        <Specialization homeDetail={this.props.homeDetail} />
        <Hospital homeDetail={this.props.homeDetail} />
        <Ambulance homeDetail={this.props.homeDetail} />
        <Equipment homeDetail={this.props.homeDetail} />
        <Nursing homeDetail={this.props.homeDetail} />
        <AirAmbulance />
        <Footer />
      </React.Fragment>
    );
  }
}
