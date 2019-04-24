import React from "react";
import Overview from "../overviewTabComponent";
import Doctor from "../doctorTabComponent";
import "./tab.css";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: "Overview"
    };
  }
  changeTab = text => {
    this.setState({
      navigation: text
    });
  };

  render() {
    return (
      <div>
        <div class="tabs is-boxed">
          <ul>
            <li
              class={this.state.navigation === "Overview" ? "is-active" : ""}
              onClick={() => this.changeTab("Overview")}
            >
              <a>
                <span class="icon is-small">
                  <i class="fas fa-file-alt" aria-hidden="true" />
                </span>
                <span>Overview</span>
              </a>
            </li>
            <li
              class={this.state.navigation === "Beds" ? "is-active" : ""}
              onClick={() => this.changeTab("Beds")}
            >
              <a>
                <span class="icon is-small">
                  <i class="fas fa-bed" aria-hidden="true" />
                </span>
                <span>Beds</span>
              </a>
            </li>
            <li
              class={this.state.navigation === "Doctors" ? "is-active" : ""}
              onClick={() => this.changeTab("Doctors")}
            >
              <a>
                <span class="icon is-small">
                  <i class="fas fa-user-md" aria-hidden="true" />
                </span>
                <span>Doctors</span>
              </a>
            </li>
            <li
              class={this.state.navigation === "Ambulances" ? "is-active" : ""}
              onClick={() => this.changeTab("Ambulances")}
            >
              <a>
                <span class="icon is-small">
                  <i class="fas fa-ambulance" aria-hidden="true" />
                </span>
                <span>Ambulances</span>
              </a>
            </li>
          </ul>
        </div>

        {this.state.navigation === "Overview" ? <Overview /> : null}
        {this.state.navigation === "Beds" ? null : null}
        {this.state.navigation === "Doctors" ? <Doctor /> : null}
        {this.state.navigation === "Ambulances" ? null : null}
      </div>
    );
  }
}
