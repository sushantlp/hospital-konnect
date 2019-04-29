import React from "react";
import { Route } from "react-router-dom";
import _ from "lodash";

import { Container, Grid, Image } from "semantic-ui-react";
import "./airAmbulance.css";

export default class AirAmbulance extends React.Component {
  onViewDetail = () => {};

  render() {
    if (this.props.homeDetail.status === "START") return <div />;
    else if (this.props.homeDetail.status === "FAIL") return <div />;

    const object = this.props.homeDetail.homeDetail.AAMB;

    return (
      <Container style={{ width: "89em", lineHeight: "1.66667" }}>
        <br />
        <h4 className="header-name">AIR AMBULANCE</h4>
        <div className="underscore" />
        <br />
        <div className="air-ambulance-container">
          <Grid>
            <Grid.Row columns={4}>
              <Grid.Column>
                <p class="title is-4" style={{ lineHeight: "1.66667" }}>
                  {object.detail.head}
                </p>
                <p
                  class="subtitle is-6 has-text-justified"
                  style={{ lineHeight: "1.66667" }}
                >
                  {object.detail.body}
                </p>
                <div
                  class="buttons are-medium"
                  onClick={() => this.onViewDetail()}
                >
                  <span class="button is-info">View Detail</span>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={8}>
              <Image src={object.img} alt={object.detail} />
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
}
