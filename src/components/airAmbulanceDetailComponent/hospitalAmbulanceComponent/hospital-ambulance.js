import React from "react";

import { Segment, Grid, Icon, Button } from "semantic-ui-react";

import "./static/css/hospital-ambulance.css";

export default class HospitalBed extends React.Component {
  render() {
    return (
      <div>
        <h2 className="hospital-ambulance-header">
          <span>Ambulances in People Tree Hospitals</span>
        </h2>

        <Segment>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div>
                  <h3 className="hospital-ambulance-title">
                    <span>Patient Transport</span>
                  </h3>

                  <p className="hospital-ambulance-price">
                    <span>Price :</span>
                    <span className="hospital-price-icon">
                      <Icon name="rupee sign" size="small" />
                    </span>

                    <span>1000</span>
                  </p>
                  <p className="hospital-ambulance-available">
                    <span>Availability :</span>
                    <span className="hospital-ambulance-available-count">
                      100
                    </span>
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <Button
                  style={{
                    backgroundColor: "#ed3237",
                    color: "white",
                    float: "right"
                  }}
                >
                  Book
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} style={{ paddingTop: "0px" }}>
              <Grid.Column>
                <p className="hospital-ambulance-description">
                  This is certainly going to be one of the most iconic night of
                  the year #NYE2019 Vibrate your senses with a booming sound
                  system, phenomenal light rigs and bustling atmosphere with DJ
                  Tanvi!! This #NYE enter the #3DotsBangaloreJPN & Party like
                  you never did before.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div>
                  <h3 className="hospital-ambulance-title">
                    <span>Mortuary</span>
                  </h3>
                  <p className="hospital-ambulance-price">
                    <span>Price :</span>
                    <span className="hospital-price-icon">
                      <Icon name="rupee sign" size="small" />
                    </span>
                    <span>1000</span>
                  </p>
                  <p className="hospital-ambulance-available">
                    <span>Availability :</span>
                    <span className="hospital-ambulance-available-count">
                      100
                    </span>
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <Button
                  style={{
                    backgroundColor: "#ed3237",
                    color: "white",
                    float: "right"
                  }}
                >
                  Book
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} style={{ paddingTop: "0px" }}>
              <Grid.Column>
                <p className="hospital-ambulance-description">
                  This is certainly going to be one of the most iconic night of
                  the year #NYE2019 Vibrate your senses with a booming sound
                  system, phenomenal light rigs and bustling atmosphere with DJ
                  Tanvi!! This #NYE enter the #3DotsBangaloreJPN & Party like
                  you never did before.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div>
                  <h3 className="hospital-ambulance-title">
                    <span>ALS</span>
                  </h3>
                  <p className="hospital-ambulance-price">
                    <span>Price :</span>
                    <span className="hospital-price-icon">
                      <Icon name="rupee sign" size="small" />
                    </span>
                    <span>1000</span>
                  </p>

                  <p className="hospital-ambulance-available">
                    <span>Availability :</span>
                    <span className="hospital-ambulance-available-count">
                      100
                    </span>
                  </p>
                </div>
              </Grid.Column>

              <Grid.Column>
                <Button
                  style={{
                    backgroundColor: "#ed3237",
                    color: "white",
                    float: "right"
                  }}
                >
                  Book
                </Button>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1} style={{ paddingTop: "0px" }}>
              <Grid.Column>
                <p className="hospital-ambulance-description">
                  This is certainly going to be one of the most iconic night of
                  the year #NYE2019 Vibrate your senses with a booming sound
                  system, phenomenal light rigs and bustling atmosphere with DJ
                  Tanvi!! This #NYE enter the #3DotsBangaloreJPN & Party like
                  you never did before.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
