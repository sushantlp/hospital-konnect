import React from "react";
import { Segment, Image, Grid, Icon, Button } from "semantic-ui-react";
import "./static/css/hospital-detail-card.css";

export default class AmbulanceCard extends React.Component {
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
                    <span>AMBULANCE NAME</span>
                  </h1>

                  <h2 className="hospital-address">
                    <span>West Of Chord Road, Bangalore</span>
                  </h2>

                  <h2 className="hospital-specialist">
                    <span>Vehicle Details</span>

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
                    Book Now!
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
