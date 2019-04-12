import React from "react";
import { Tab } from "semantic-ui-react";
import NursingOverview from "../nursingOverviewComponent/nursing-overview";
// import HospitalSpecialist from "../hospitalSpecialistComponent/hospital-specialist";
// import HospitalDoctor from "../hospitalDoctorComponent/hospital-doctor";
// import HospitalBed from "../hospitalBedComponent/hospital-bed";
import NursingCareDetails from "../ncdComponent/ncDetails";
// import HospitalMap from "../hospitalMapComponent/hospital-map";
import "./static/css/hospital-tab.css";

export default class NursingTab extends React.Component {
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
            <NursingOverview />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Nursing Care Details",
        render: () => (
          <Tab.Pane>
            <NursingCareDetails />
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
