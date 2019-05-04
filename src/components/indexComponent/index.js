import React from "react";

import Footer from "../footerComponent/footer";
import Search from "./searchComponent/search";
import Specialization from "./specializationComponent/specialization";
import Hospital from "./hospitalComponent/hospital";
import Ambulance from "./ambulanceComponent/ambulance";
import AirAmbulance from "./airAmbulanceComponent/airAmbulance";
import Nursing from "./nursingComponent/nursing";
import Equipment from "./equipmentComponent/equipment";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: 0,
      localityId: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getCityLocality();
    this.props.getHomeDetail(1);
    this.props.getWallImage();
    this.props.getKeywordSearch(1);
  }

  changeCityApiCall = cityId => {
    this.props.getHomeDetail(cityId);
    this.props.getKeywordSearch(cityId);
  };

  updateCityState = cityId => {
    this.setState({
      cityId: cityId
    });
  };

  updateLocalityState = localityId => {
    this.setState({
      localityId: localityId
    });
  };

  tripToDetailView = (object, name, category, flag) => {
    let partnerId = 0;
    let partnerName = "";
    if (flag) {
      partnerName = object.value;
      partnerId = object.key_id;
    } else {
      partnerName = object.partner;
      partnerId = object.partner_id;
    }
    const partnerUrl = partnerName.replace(/ /g, "-").toLowerCase();
    this.props.history.push("/");

    // Url Change
    this.props.history.push({
      pathname: `${this.props.match.params.city}/${
        this.props.match.params.locality
      }/${name}/${partnerUrl}`,
      search: `?partner=${partnerId}&category=${category}`,
      state: { data: object }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Search
          cityLocality={this.props.cityLocality}
          wallImage={this.props.wallImage}
          keywordSearch={this.props.keywordSearch}
          changeCityApiCall={this.changeCityApiCall}
          parentProps={this.props}
          parentState={this.state}
          updateCityState={this.updateCityState}
          updateLocalityState={this.updateLocalityState}
          tripToDetailView={this.tripToDetailView}
        />
        <Specialization
          homeDetail={this.props.homeDetail}
          parentProps={this.props}
          parentState={this.state}
        />
        <Hospital
          homeDetail={this.props.homeDetail}
          tripToDetailView={this.tripToDetailView}
        />
        <Ambulance
          homeDetail={this.props.homeDetail}
          tripToDetailView={this.tripToDetailView}
        />
        <Equipment
          homeDetail={this.props.homeDetail}
          tripToDetailView={this.tripToDetailView}
        />
        <Nursing
          homeDetail={this.props.homeDetail}
          tripToDetailView={this.tripToDetailView}
        />
        <AirAmbulance
          homeDetail={this.props.homeDetail}
          tripToDetailView={this.tripToDetailView}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
