import React from "react";

import { Tab } from "semantic-ui-react/dist/commonjs";

import HospitalOverview from "../hospitalOverviewComponent/hospital-overview";
import HospitalSpecialist from "../hospitalSpecialistComponent/hospital-specialist";
import "./static/css/hospital-tab.css";

export default class HospitalTab extends React.Component {
  render() {
    const panes = [
      {
        menuItem: "Overview",
        render: () => (
          <Tab.Pane>
            <HospitalOverview />
          </Tab.Pane>
        )
      },
      { menuItem: "Doctors", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: "Beds", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
      {
        menuItem: "Ambulances",
        render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
      },
      {
        menuItem: "Specialists",
        render: () => (
          <Tab.Pane>
            <HospitalSpecialist />
          </Tab.Pane>
        )
      }
    ];

    return (
      // menu={{ pointing: true, className: "wrapped" }}
      <div className="tab-container">
        <Tab panes={panes} />
      </div>
    );
  }
}
