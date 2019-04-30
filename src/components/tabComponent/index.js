import React from "react";
import _ from "lodash";

import Overview from "../overviewTabComponent";
import Doctor from "../doctorTabComponent";
import Bed from "../bedTabComponent";
import Ambulance from "../ambulanceTabComponent";
import "./tab.css";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: "Overview",
      bedCancel: false,
      bedTerm: false,
      ambulanceCancel: false,
      ambulanceTerm: false
    };
  }
  changeTab = text => {
    this.setState({
      navigation: text
    });
  };

  changeBedCancel = () => {
    if (this.state.bedTerm) {
      this.setState({
        bedTerm: false
      });
    }

    this.setState({
      bedCancel: !this.state.bedCancel
    });
  };

  changeBedTerm = () => {
    if (this.state.bedCancel) {
      this.setState({
        bedCancel: false
      });
    }

    this.setState({
      bedTerm: !this.state.bedTerm
    });
  };

  changeAmbulanceCancel = () => {
    if (this.state.ambulanceTerm) {
      this.setState({
        ambulanceTerm: false
      });
    }

    this.setState({
      ambulanceCancel: !this.state.ambulanceCancel
    });
  };

  changeAmbulanceTerm = () => {
    if (this.state.ambulanceCancel) {
      this.setState({
        ambulanceCancel: false
      });
    }

    this.setState({
      ambulanceTerm: !this.state.ambulanceTerm
    });
  };

  // handleClick = e => {
  //   console.log(e);
  // };
  render() {
    if (this.props.categoryFeature.status === "START") return <div />;
    else if (this.props.categoryFeature.status === "FAIL") return <div />;

    if (_.isEmpty(this.props.categoryFeature.categoryFeature)) return <div />;

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

            {this.props.categoryFeature.categoryFeature.p_cat === 1 ? (
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
            ) : null}

            {this.props.categoryFeature.categoryFeature.p_cat === 1 ? (
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
            ) : null}

            {this.props.categoryFeature.categoryFeature.p_cat === 1 ||
            this.props.categoryFeature.categoryFeature.p_cat === 2 ? (
              <li
                class={
                  this.state.navigation === "Ambulances" ? "is-active" : ""
                }
                onClick={() => this.changeTab("Ambulances")}
              >
                <a>
                  <span class="icon is-small">
                    <i class="fas fa-ambulance" aria-hidden="true" />
                  </span>
                  <span>Ambulances</span>
                </a>
              </li>
            ) : null}

            {this.props.categoryFeature.categoryFeature.p_cat === 3 ? (
              <li
                class={
                  this.state.navigation === "Equipments" ? "is-active" : ""
                }
                onClick={() => this.changeTab("Equipments")}
              >
                <a>
                  <span class="icon is-small">
                    <i class="fas fa-stethoscope" aria-hidden="true" />
                  </span>
                  <span>Equipments</span>
                </a>
              </li>
            ) : null}

            {this.props.categoryFeature.categoryFeature.p_cat === 4 ? (
              <li
                class={this.state.navigation === "Nursings" ? "is-active" : ""}
                onClick={() => this.changeTab("Nursings")}
              >
                <a>
                  <span class="icon is-small">
                    <i class="fas fa-user-md" aria-hidden="true" />
                  </span>
                  <span>Nursings</span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        {this.state.navigation === "Overview" ? (
          <Overview categoryFeature={this.props.categoryFeature} />
        ) : null}

        {this.props.categoryFeature.categoryFeature.p_cat === 1 ? (
          this.state.navigation === "Beds" ? (
            <Bed
              categoryFeature={this.props.categoryFeature}
              changeBedCancel={this.changeBedCancel}
              changeBedTerm={this.changeBedTerm}
              parentState={this.state}
            />
          ) : null
        ) : null}

        {this.props.categoryFeature.categoryFeature.p_cat === 1 ? (
          this.state.navigation === "Doctors" ? (
            <Doctor categoryFeature={this.props.categoryFeature} />
          ) : null
        ) : null}

        {this.props.categoryFeature.categoryFeature.p_cat === 1 ||
        this.props.categoryFeature.categoryFeature.p_cat === 2 ? (
          this.state.navigation === "Ambulances" ? (
            <Ambulance
              categoryFeature={this.props.categoryFeature}
              changeAmbulanceTerm={this.changeAmbulanceTerm}
              changeAmbulanceCancel={this.changeAmbulanceCancel}
              parentState={this.state}
              // handleClick={this.handleClick}
              // this={this}
            />
          ) : null
        ) : null}

        {this.props.categoryFeature.categoryFeature.p_cat === 3 ? (
          this.state.navigation === "Equipments" ? (
            <Bed
              categoryFeature={this.props.categoryFeature}
              changeBedCancel={this.changeBedCancel}
              changeBedTerm={this.changeBedTerm}
              parentState={this.state}
            />
          ) : null
        ) : null}

        {this.props.categoryFeature.categoryFeature.p_cat === 4 ? (
          this.state.navigation === "Nursings" ? (
            <Bed
              categoryFeature={this.props.categoryFeature}
              changeBedCancel={this.changeBedCancel}
              changeBedTerm={this.changeBedTerm}
              parentState={this.state}
            />
          ) : null
        ) : null}
      </div>
    );
  }
}
