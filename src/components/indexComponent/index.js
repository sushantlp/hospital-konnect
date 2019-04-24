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
  render() {
    return (
      <React.Fragment>
        <Search />
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
