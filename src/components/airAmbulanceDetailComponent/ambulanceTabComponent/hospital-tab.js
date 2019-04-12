import React from "react";
import { Tab } from "semantic-ui-react";
import HospitalOverview from "../hospitalOverviewComponent/hospital-overview";
// import HospitalSpecialist from "../hospitalSpecialistComponent/hospital-specialist";
// import HospitalDoctor from "../hospitalDoctorComponent/hospital-doctor";
// import HospitalBed from "../hospitalBedComponent/hospital-bed";
// import HospitalAmbulance from "../hospitalAmbulanceComponent/hospital-ambulance";
// import HospitalMap from "../hospitalMapComponent/hospital-map";

import "./static/css/hospital-tab.css";

export default class HospitalTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden_segment: false
    };
  }

  tabChange = (event, index) => {
    if (index === 0) {
      if (this.state.hidden_segment !== false) {
        this.setState({
          hidden_segment: false
        });
      }
    } else {
      if (this.state.hidden_segment !== true) {
        this.setState({
          hidden_segment: true
        });
      }
    }
  };

  render() {
    const panes = [
      {
        menuItem: "Basic Details",
        render: () => (
          <Tab.Pane>
            <HospitalOverview />
            <h3>Address</h3>
            <p>98, HAL Old Airport Rd,<br/>
                    Kodihalli, Bengaluru,<br/>
                    Karnataka 560017<br/>
</p>
            <h3>Details</h3>
            <p>Shrine ablative office shanty town franchise motion sensory table monofilament-ware girl dead warehouse grenade rebar Tokyo spook. Geodesic footage sensory network nano-dead-space neural sentient A.I. euro-pop katana monofilament modem range-rover courier soul-delay. Legba corporation film augmented reality BASE jump denim sub-orbital tattoo monofilament grenade plastic shanty town drone-space. Sensory rifle digital sunglasses wonton soup monofilament fetishism uplink spook neon construct futurity corrupted. Shoes realism weathered human wonton soup-ware plastic sprawl nano-assault convenience store fetishism grenade. Futurity claymore mine man urban DIY j-pop meta--space grenade marketing plastic 3D-printed dissident. Engine claymore mine shanty town market tube RAF numinous shoes narrative augmented reality shrine render-farm sunglasses range-rover stimulate cyber. Girl sunglasses semiotics rifle beef noodles alcohol cardboard weathered systema decay faded kanji. </p>
          </Tab.Pane>
        )
      }
    ];

    return (
      // menu={{ pointing: true, className: "wrapped" }}

      <div className="tab-container">
        <Tab
          panes={panes}
          onTabChange={(event, data) => this.tabChange(event, data.activeIndex)}
        />
      </div>
    );
  }
}