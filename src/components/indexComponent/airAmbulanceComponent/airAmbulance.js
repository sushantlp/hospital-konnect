import React from "react";
import { Route } from "react-router-dom";
import { Container, Grid, Image } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./airAmbulance.css";

export default class AirAmbulance extends React.Component {
  gotoAA() {
    window.location.hash = "/airambulance";
  }

  render() {
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
                  We Can Help You Anytime Anywhere....
                </p>
                <p
                  class="subtitle is-6 has-text-justified"
                  style={{ lineHeight: "1.66667" }}
                >
                  Aviators Air Rescue Pvt.Ltd., is a pioneer in Helicopter
                  Emergency Medical Services (HEMS) in India and has acquired
                  three Airbus helicopters H-130 medically equipped to transport
                  patients in critical conditions from one location to another
                  in a timely manner to increase survival rate. In the first
                  phase Aviators Air Rescue will cover all 6 southern states –
                  Karnataka, Tamil Nadu, Kerala, Pondicherry, Andhra Pradesh and
                  Telangana with 3 helicopters that are currently based in
                  Bangalore, Chennai and Hyderabad.
                </p>
                <p
                  class="subtitle is-6 has-text-justified"
                  style={{ lineHeight: "1.66667" }}
                >
                  Aviators is well known for the past 24 years in the aviation
                  sector in India and Internationally for our excellence in
                  support for :
                  <br />
                  <br />
                  -Flight Operations both domestic & international
                  <br />
                  -Aircraft & Helicopter Sales
                  <br />
                  -Charter and Management
                </p>
                <Route
                  render={({ history }) => (
                    <div
                      class="buttons are-medium"
                      onClick={() => {
                        history.push("/airambulance");
                      }}
                    >
                      <span class="button is-info">View Detail</span>
                    </div>
                  )}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={8}>
              <Image src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,e_boomerang,w_700/v1555331469/ballyhoo/BALLYHOO_WEBSITE/air-1.jpg" />
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
}
