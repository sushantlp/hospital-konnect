import React from "react";

import { Segment, Image, Grid, Icon, Button, Divider } from "semantic-ui-react";

import "./static/css/hospital-detail-card.css";

export default class NursingCard extends React.Component {
  render() {
    return (
      <div className="hdc_container">
        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={2}>
                <div>
                  <Image
                    floated="left"
                    size="tiny"
                    src="https://images1-fabric.practo.com/535a0fc2301e403ceecc1626fa5fdf0a82bc5c51ef2de.png/thumbnail"
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={14}>
                <div>
                  <h1 className="hospital-name">
                    <span>PROVIDER DETAILS</span>
                  </h1>

                  <h2 className="hospital-address">
                    <span>West Of Chord Road, Bangalore</span>
                  </h2>

                  <h2 className="hospital-specialist">
                    <span>DETAILS</span>

                    <span className="bed">
                      <span className="bed-dot">.</span>
                      <span className="bed-count">100</span>
                      <span className="bed-text">Beds</span>
                    </span>

                    <span className="doctor">
                      <span className="doctor-dot">.</span>
                      <span className="doctor-count">21</span>
                      <span className="doctor-text">Doctors</span>
                    </span>
                  </h2>
                </div>

                <div className="call-button">
                  <Button
                    style={{
                      backgroundColor: "#ed3237",
                      color: "white",
                      opacity: "1",
                      width: "15em",
                      height: "3em",
                      fontSize: "1.1em",
                      fontWeight: "500",
                      marginTop: "4em",
                      float: "right"
                    }}
                  >
                    <Icon name="phone" />
                    Call Now
                  </Button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {/* <Divider />

          <div>
            <div className="phone-number-text-div">
              <span className="phone-number-text">Phone number</span>
            </div>
            <div className="phone-number-div">
              <p className="phone-number-p">080 7196 6843</p>
            </div>
          </div> */}
        </Segment>
      </div>
    );
  }
}
