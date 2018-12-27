import React from "react";

import { Container, Grid, Button } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/airAmbulance.css";

export default class AirAmbulance extends React.Component {
  render() {
    return (
      <Container className="air-ambulance-container" style={{ width: "89em" }}>
        <div className="header-container">
          <h4 className="header-name">AIR AMBULANCE</h4>
          <div className="underscore" />
        </div>

        <Grid fluid stackable columns="3">
          <Grid.Row>
            <Grid.Column>
              <Button
                inverted
                color="violet"
                size="large"
                style={{ marginTop: "8em", marginLeft: "10em" }}
              >
                Book Air Ambulance
              </Button>
            </Grid.Column>

            <Grid.Column />
            <Grid.Column>
              <img
                src="https://res.cloudinary.com/dp67gawk6/image/upload/v1545142191/ballyhoo/BALLYHOO_WEBSITE/airamulance.svg"
                alt=""
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
