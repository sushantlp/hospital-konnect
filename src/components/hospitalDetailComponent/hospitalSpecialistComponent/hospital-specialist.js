import React from "react";

import { Grid } from "semantic-ui-react/dist/commonjs";

import "./static/css/hospital-specialist.css";

export default class HospitalOverview extends React.Component {
  render() {
    return (
      <div>
        <h2 className="hospital-specialist-title">
          <span>Specialists in People Tree Hospitals</span>
        </h2>
      </div>
    );
  }
}
