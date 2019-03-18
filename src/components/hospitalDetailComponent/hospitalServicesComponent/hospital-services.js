import React from "react";

import "./static/css/hospital-specialist.css";

export default class HospitalOverview extends React.Component {
  render() {
    return (
      <div>
        <h2 className="hospital-specialist-title">
          <span>Services in People Tree Hospitals</span>
        </h2>

        <div className="hospital-specialist-bubble">
          gynecologist/obstetrician
        </div>

        <div className="hospital-specialist-bubble">Orthopedist</div>

        <div className="hospital-specialist-bubble">General Physician</div>

        <div className="hospital-specialist-bubble">Pediatrician</div>

        <div className="hospital-specialist-bubble">Laparoscopic Surgeon</div>

        <div className="hospital-specialist-bubble">General Surgeon</div>

        <div className="hospital-specialist-bubble">Dermatologist</div>
      </div>
    );
  }
}
