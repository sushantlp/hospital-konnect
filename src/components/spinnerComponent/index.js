import React from "react";
import { PulseLoader } from "halogenium";
import "./spinner.css";

const Spinner = props => {
  return (
    <div className="container">
      <PulseLoader color="#263868" size="20px" margin="4px" />
    </div>
  );
};

export default Spinner;
