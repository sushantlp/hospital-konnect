import React from "react";

import {
  Segment,
  Image,
  Grid,
  Icon,
  Button,
  Tab
} from "semantic-ui-react/dist/commonjs";

import "./static/css/hospital-tab.css";

export default class HospitalTab extends React.Component {
  render() {
    const panes = [
      {
        menuItem: "Overview",
        render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
      },
      { menuItem: "Doctors", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: "Beds", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
      {
        menuItem: "Ambulances",
        render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
      },
      {
        menuItem: "Specialists",
        render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
      }
    ];

    return (
      <div className="tab-container">
        <Tab panes={panes} />
      </div>
    );
  }
}
