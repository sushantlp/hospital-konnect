import React from "react";

import Footer from "../footerComponent/footer";
import Search from "./searchComponent/search";
import Specialization from "./specializationComponent/specialization";
import Hospital from "./hospitalComponent/hospital";
import Ambulance from "./ambulanceComponent/ambulance";
import AirAmbulance from "./airAmbulanceComponent/airAmbulance";
import Nursing from "./nursingComponent/nursing";
import Equipment from "./equipmentComponent/equipment";
import Spinner from "../spinnerComponent";

export default class Animation extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getCityLocality();
    this.props.getHomeDetail(1);
  }

  render() {
    // if (this.props.cityLocality.status === "START") return <Spinner />;
    // else if (this.props.cityLocality.status === "FAIL") return <Spinner />;

    return (
      <React.Fragment>
        <Search cityLocality={this.props.cityLocality} />
        <Specialization homeDetail={this.props.homeDetail} />
        <Hospital homeDetail={this.props.homeDetail} />
        <Ambulance homeDetail={this.props.homeDetail} />
        <Equipment homeDetail={this.props.homeDetail} />
        <Nursing homeDetail={this.props.homeDetail} />
        <AirAmbulance homeDetail={this.props.homeDetail} />
        <Footer />
      </React.Fragment>
    );
  }
}
