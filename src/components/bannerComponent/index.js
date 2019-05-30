import React from "react";

import "./banner.css";

export default class Banner extends React.Component {
  render() {
    return (
      <section class="hero is-large has-bg-img">
        <img
          src="https://www.practostatic.com/consumer-home/desktop/images/1540976352/medicine-on-time-banner.jpg"
          alt="image"
        />
      </section>
    );
  }
}
