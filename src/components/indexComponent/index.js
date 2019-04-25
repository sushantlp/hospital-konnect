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
  }

  render() {
    // if (this.props.cityLocality.status === "START") return <Spinner />;
    // else if (this.props.cityLocality.status === "FAIL") return <Spinner />;

    return (
      <React.Fragment>
        <Search cityLocality={this.props.cityLocality} />
        <Specialization />
        <Hospital />
        <Ambulance />
        <Equipment />
        <Nursing />
        <AirAmbulance />
        <Footer />
      </React.Fragment>
    );
  }
}
