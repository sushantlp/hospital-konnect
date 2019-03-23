import React from "react";

import { Tab, Segment } from "semantic-ui-react";

import HospitalOverview from "../hospitalOverviewComponent/hospital-overview";
import HospitalSpecialist from "../hospitalSpecialistComponent/hospital-specialist";
import HospitalDoctor from "../hospitalDoctorComponent/hospital-doctor";
import HospitalBed from "../hospitalBedComponent/hospital-bed";
import HospitalAmbulance from "../hospitalAmbulanceComponent/hospital-ambulance";
import HospitalMap from "../hospitalMapComponent/hospital-map";

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
