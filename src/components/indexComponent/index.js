import React from "react";

import ParallaxHeader from "../headerComponent/parallax-header";
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
        <ParallaxHeader />
        <Search />
        <Specialization />
        <Hospital history={[]}/>
        <Ambulance />
        <Nursing />
        <Equipment/>        
        <AirAmbulance />
        <Footer />
      </React.Fragment>
    );
  }
}
