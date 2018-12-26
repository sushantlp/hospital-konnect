import React from "react";

// import {

// } from "semantic-ui-react/dist/commonjs";

import "./static/css/seo-link.css";

export default class SeoLink extends React.Component {
  render() {
    return (
      <div className="seo-container">
        <h5 className="seo-link-header">
          Most searched localities in bangalore
        </h5>
        <a href="" className="seo-link">
          <h5 className="seo-link-locality">Hospitals in Vijayanagar</h5>
        </a>
        <a href="" className="seo-link">
          <h5 className="seo-link-locality">Hospitals in Rajajinagar</h5>
        </a>
        <a href="" className="seo-link">
          <h5 className="seo-link-locality">Hospitals in Indiranagar</h5>
        </a>
        <a href="" className="seo-link">
          <h5 className="seo-link-locality">Hospitals in Malleswaram</h5>
        </a>
        <a href="" className="seo-link">
          <h5 className="seo-link-locality">Hospitals in Rt Nagar</h5>
        </a>
      </div>
    );
  }
}
