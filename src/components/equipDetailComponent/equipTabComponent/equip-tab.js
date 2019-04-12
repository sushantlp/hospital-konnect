import React from "react";

import { Tab } from "semantic-ui-react";

import EquipOverview from "../equipOverviewComponent/equip-overview";
// import HospitalSpecialist from "../hospitalSpecialistComponent/hospital-specialist";
// import HospitalDoctor from "../hospitalDoctorComponent/hospital-doctor";
// import HospitalBed from "../hospitalBedComponent/hospital-bed";
import EquipmentDetails from "../eqdComponent/eqd";
// import HospitalMap from "../hospitalMapComponent/hospital-map";

import "./static/css/hospital-tab.css";

export default class EquipTab extends React.Component {
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
        menuItem: "Overview",
        render: () => (
          <Tab.Pane>
            <EquipOverview />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Provider Details",
        render: () => (
          <Tab.Pane>
            <EquipmentDetails />
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
