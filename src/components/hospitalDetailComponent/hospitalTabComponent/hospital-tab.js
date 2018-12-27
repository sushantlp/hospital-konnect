import React from "react";

import { Tab, Segment } from "semantic-ui-react";

import HospitalOverview from "../hospitalOverviewComponent/hospital-overview";
import HospitalSpecialist from "../hospitalSpecialistComponent/hospital-specialist";
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
        <Tab
          panes={panes}
          onTabChange={(event, data) => this.tabChange(event, data.activeIndex)}
        />
        <Segment
          style={{
            display: this.state.hidden_segment ? "none" : "block"
          }}
        >
          <HospitalSpecialist />
        </Segment>
      </div>
    );
  }
}
