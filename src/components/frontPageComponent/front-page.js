import React from "react";

import { Responsive } from "semantic-ui-react/dist/commonjs";

import "./static/css/front-page.css";

export default class FrontPage extends React.Component {
  // constructor(props) {}

  animationRoute = () => {
    this.props.history.push("/animation/");
  };

  render() {
    return (
      <Responsive
        style={{
          width: "auto",
          height: "650px",
          backgroundImage:
            "url('https://res.cloudinary.com/dp67gawk6/image/upload/v1544707631/ballyhoo/BALLYHOO_WEBSITE/HospitalKonnect-logo.jpg')",

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden",
          cursor: "pointer"
        }}
        onClick={() => this.animationRoute()}
      />
    );
  }
}
