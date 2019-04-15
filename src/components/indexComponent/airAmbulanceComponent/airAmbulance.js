import React from "react";
import { Route } from "react-router-dom";
import { Container, Grid, Image } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/airAmbulance.css";

export default class AirAmbulance extends React.Component {
  gotoAA() {
    window.location.hash = "/airambulance";
  }

  render() {
    return (
      <Container style={{ width: "89em" }}>
        <br />
        <h4 className="header-name">AIR AMBULANCE</h4>
        <div className="underscore" />
        <br />
        <div className="air-ambulance-container">
          <Grid>
            <Grid.Row columns={4}>
              <Grid.Column>
                <h3 class="title is-spaced">
                  We Can Help You Anytime Anywhere....
                </h3>
                <h4 class="subtitle has-text-weight-light has-text-justified is-size-6">
                  Aviators Air Rescue Pvt.Ltd., is a pioneer in Helicopter
                  Emergency Medical Services (HEMS) in India and has acquired
                  three Airbus helicopters H-130 medically equipped to transport
                  patients in critical conditions from one location to another
                  in a timely manner to increase survival rate. In the first
                  phase Aviators Air Rescue will cover all 6 southern states –
                  Karnataka, Tamil Nadu, Kerala, Pondicherry, Andhra Pradesh and
                  Telangana with 3 helicopters that are currently based in
                  Bangalore, Chennai and Hyderabad.
                </h4>

                <Route
                  render={({ history }) => (
                    <div
                      class="buttons are-medium"
                      onClick={() => {
                        history.push("/airambulance");
                      }}
                    >
                      <span class="button is-success">View Detail</span>
                    </div>
                  )}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={8}>
              <Image src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,e_art:incognito,w_700/v1555331469/ballyhoo/BALLYHOO_WEBSITE/air-1.jpg" />
            </Grid.Row>
          </Grid>

          {/* <Grid fluid stackable columns="2">
            <Grid.Row>
              <Grid.Column>
                <p>
                  Grenade sprawl nodality pistol film decay vehicle BASE jump
                  network-space artisanal-ware car savant table rebar receding.
                  Bicycle skyscraper weathered neural franchise pen paranoid.
                  Sensory decay voodoo god paranoid fetishism city nodal point
                  tattoo spook uplink cardboard crypto. Cyber-vinyl tank-traps
                  crypto-fetishism film futurity uplink dissident 8-bit cartel
                  footage sunglasses corporation. Wristwatch plastic tower
                  augmented reality knife computer media sub-orbital alcohol
                  vehicle human shrine soul-delay industrial grade. Courier
                  otaku ablative 8-bit DIY tattoo table.
                </p>
                <Route
                  render={({ history }) => (
                    <Button
                      onClick={() => {
                        history.push("/airambulance");
                      }}
                    >
                      Details
                    </Button>
                  )}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid> */}
        </div>
      </Container>
    );
  }
}
