import React from "react";
// import ShowMore from "react-show-more";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";

import "./static/css/hospital-bed.css";

export default class HospitalBed extends React.Component {
  render() {
    return (
      <div>
        <h2 className="hospital-bed-header">
          <span>Beds in People Tree Hospitals</span>
        </h2>

        <Segment>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div>
                  <h3 className="hospital-bed-title">
                    <span>Curative Card Bed</span>
                  </h3>

                  <p className="hospital-bed-price">
                    <span>Price :</span>
                    <span className="hospital-price-icon">
                      <Icon name="rupee sign" size="small" />
                    </span>

                    <span>1000</span>
                  </p>

                  <p className="hospital-bed-available">
                    <span>Availability :</span>

                    <span className="hospital-bed-available-count">Yes/No</span>                  </p>
                  <p className="hospital-bed-available">
                    <span>Cancellation Policy</span>
                  </p>
                  <p className="hospital-bed-available">
                    <span>Terms and Conditions</span>
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
                {/* <ShowMore
                  lines={3}
                  more="[more]"
                  less="[shrink]"
                  anchorClass="hospital-bed-description"
                > */}
                <p className="hospital-bed-description">
                  This is certainly going to be one of the most iconic night of
                  the year #NYE2019 Vibrate your senses with a booming sound
                  system, phenomenal light rigs and bustling atmosphere with DJ
                  Tanvi!! This #NYE enter the #3DotsBangaloreJPN & Party like
                  you never did before. It just wouldn’t be right, if you
                  weren’t with us when the clock strikes midnight! It’s the
                  perfect way to kick in 2019 of the year #NYE2019 Vibrate your
                  senses with a booming sound system, phenomenal light rigs and
                  bustling atmosphere with DJ Tanvi!! This #NYE enter the
                  #3DotsBangaloreJPN & Party like you never did before. It just
                  wouldn’t be right, if you weren’t with us when the clock
                  strikes midnight! It’s the perfect way to kick in 2019
                </p>
                {/* </ShowMore> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div>
                  <h3 className="hospital-bed-title">
                    <span>Curative Card Bed</span>
                  </h3>

                  <p className="hospital-bed-price">
                    <span>Price :</span>
                    <span className="hospital-price-icon">
                      <Icon name="rupee sign" size="small" />
                    </span>

                    <span>1000</span>
                  </p>

                  <p className="hospital-bed-available">
                    <span>Availability :</span>
                    <span className="hospital-bed-available-count">Yes/No</span>                  
                  </p>
                  <p className="hospital-bed-available">
                    <span>Cancellation Policy</span>
                  </p>
                  <p className="hospital-bed-available">
                    <span>Terms and Conditions</span>
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
                {/* <ShowMore
                  lines={3}
                  more="[more]"
                  less="[shrink]"
                  anchorClass="hospital-bed-description"
                > */}
                <p className="hospital-bed-description">
                  This is certainly going to be one of the most iconic night of
                  the year #NYE2019 Vibrate your senses with a booming sound
                  system, phenomenal light rigs and bustling atmosphere with DJ
                  Tanvi!! This #NYE enter the #3DotsBangaloreJPN & Party like
                  you never did before. It just wouldn’t be right, if you
                  weren’t with us when the clock strikes midnight! It’s the
                  perfect way to kick in 2019 of the year #NYE2019 Vibrate your
                  senses with a booming sound system, phenomenal light rigs and
                  bustling atmosphere with DJ Tanvi!! This #NYE enter the
                  #3DotsBangaloreJPN & Party like you never did before. It just
                  wouldn’t be right, if you weren’t with us when the clock
                  strikes midnight! It’s the perfect way to kick in 2019
                </p>
                {/* </ShowMore> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div>
                  <h3 className="hospital-bed-title">
                    <span>Curative Card Bed</span>
                  </h3>

                  <p className="hospital-bed-price">
                    <span>Price :</span>
                    <span className="hospital-price-icon">
                      <Icon name="rupee sign" size="small" />
                    </span>

                    <span>1000</span>
                  </p>

                  <p className="hospital-bed-available">
                    <span>Availability :</span>

                    <span className="hospital-bed-available-count">Yes/No</span>                  </p>
                  <p className="hospital-bed-available">
                    <span>Cancellation Policy</span>
                  </p>
                  <p className="hospital-bed-available">
                    <span>Terms and Conditions</span>
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
                {/* <ShowMore
                  lines={3}
                  more="[more]"
                  less="[shrink]"
                  anchorClass="hospital-bed-description"
                > */}
                <p className="hospital-bed-description">
                  This is certainly going to be one of the most iconic night of
                  the year #NYE2019 Vibrate your senses with a booming sound
                  system, phenomenal light rigs and bustling atmosphere with DJ
                  Tanvi!! This #NYE enter the #3DotsBangaloreJPN & Party like
                  you never did before. It just wouldn’t be right, if you
                  weren’t with us when the clock strikes midnight! It’s the
                  perfect way to kick in 2019 of the year #NYE2019 Vibrate your
                  senses with a booming sound system, phenomenal light rigs and
                  bustling atmosphere with DJ Tanvi!! This #NYE enter the
                  #3DotsBangaloreJPN & Party like you never did before. It just
                  wouldn’t be right, if you weren’t with us when the clock
                  strikes midnight! It’s the perfect way to kick in 2019
                </p>
                {/* </ShowMore> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
