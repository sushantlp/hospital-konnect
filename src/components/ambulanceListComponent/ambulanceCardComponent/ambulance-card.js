import React from "react";

import { Segment, Image, Grid, Icon, Button, Divider } from "semantic-ui-react";
import "./static/css/hospital-card.css";

export default class HospitalCard extends React.Component {
  render() {
    return (
      <div>
        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <div>
                  <Image
                    floated="left"
                    size="tiny"
                    src="https://images1-fabric.practo.com/535a0fc2301e403ceecc1626fa5fdf0a82bc5c51ef2de.png/thumbnail"
                  />
                </div>
                <div>
                  <a href="/" className="hospital-card-href">
                    <h4 className="hospital-card-name">
                      People Tree Hospitals
                    </h4>
                  </a>
                  <div className="hospital-card-specialist">
                    Multi-Speciality Hospital<br/><br/>
                    98, HAL Old Airport Rd,<br/>
                    Kodihalli, Bengaluru,<br/>
                    Karnataka 560017<br/>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={6}>
                <div className="clock-div">
                  <span>
                    <Icon
                      name="clock outline"
                      size="small"
                      style={{ fontSize: "1em" }}
                    />
                  </span>
                  <span>OPEN 24 HOURS</span>
                  <br />
                </div>

                <div className="clock-map">
                  <span>
                    <Icon
                      name="map marker alternate"
                      size="small"
                      style={{ fontSize: "1em" }}
                    />
                  </span>
                  <span>Yeshwanthpur</span>
                  <Icon style={{"marginLeft":"40px"}}name="rupee" /> Registration Charges 500/-
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <div>
            <div>
              <a href="/" className="hospital-card-href">
                <span className="view-profile">View Profile</span>
              </a>
            </div>
            <div className="phone-number-text-div">
              <span className="phone-number-text">Emergency number</span>
            </div>
            <div className="phone-number-div">
              <p className="phone-number-p">080 7196 6843</p>
            </div>
          </div>          
        </Segment>
        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <Image
                  floated="left"
                  size="tiny"
                  src="https://images1-fabric.practo.com/54f55d54ec4fbcd07d620e17eb0c13ef04866fb2b80a2.jpg/thumbnail"
                />
                <div>
                  <a href="/" className="hospital-card-href">
                    <h4 className="hospital-card-name">Nano Hospitals</h4>
                  </a>
                  <div className="hospital-card-specialist">
                    Multi-Speciality Hospital<br/><br/><br/>
                    98, HAL Old Airport Rd,<br/>
                    Kodihalli, Bengaluru,<br/>
                    Karnataka 560017<br/>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={6}>
                <div className="clock-div">
                  <span>
                    <Icon
                      name="clock outline"
                      size="small"
                      style={{ fontSize: "1em" }}
                    />
                  </span>
                  <span>OPEN 24 HOURS</span>
                  <br />
                </div>

                <div className="clock-map">
                  <span>
                    <Icon
                      name="map marker alternate"
                      size="small"
                      style={{ fontSize: "1em" }}
                    />
                  </span>
                  <span>Yeshwanthpur</span>
                  <Icon style={{"marginLeft":"40px"}}name="rupee" /> Registration Charges 500/-
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <div>
            <div>
              <a href="/" className="hospital-card-href">
                <span className="view-profile">View Profile</span>
              </a>
            </div>
            <div className="phone-number-text-div">
              <span className="phone-number-text">Emergency number</span>
            </div>
            <div className="phone-number-div">
              <p className="phone-number-p">080 7196 6843</p>
            </div>
          </div>          
        </Segment>
        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <Image
                  floated="left"
                  size="tiny"
                  src="https://images1-fabric.practo.com/practices/659126/marvel-hospital-and-fertility-centre-bangalore-5b5743e1ec142.png/thumbnail"
                />
                <div>
                  <a href="/" className="hospital-card-href">
                    <h4 className="hospital-card-name">
                      Marvel Multispeciality Hospital
                    </h4>
                  </a>
                  <span className="hospital-card-specialist">
                    Multi-Speciality Hospital<br/><br/>
                    98, HAL Old Airport Rd,<br/>
                    Kodihalli, Bengaluru,<br/>
                    Karnataka 560017<br/>
                  </span>
                </div>
              </Grid.Column>
              <Grid.Column width={6}>
                <div className="clock-div">
                  <span>
                    <Icon
                      name="clock outline"
                      size="small"
                      style={{ fontSize: "1em" }}
                    />
                  </span>
                  <span>MON-SUN</span>
                  <br />
                  <span className="time">8:00 AM - 10:00 PM</span>
                </div>

                <div className="clock-map">
                  <span>
                    <Icon
                      name="map marker alternate"
                      size="small"
                      style={{ fontSize: "1em" }}
                    />
                  </span>
                  <span>Yeshwanthpur</span>
                  <Icon style={{"marginLeft":"40px"}}name="rupee" /> Registration Charges 500/-
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <div>
            <div>
              <a href="/" className="hospital-card-href">
                <span className="view-profile">View Profile</span>
              </a>
            </div>
            <div className="phone-number-text-div">
              <span className="phone-number-text">Emergency number</span>
            </div>
            <div className="phone-number-div">
              <p className="phone-number-p">080 7196 6843</p>
            </div>
          </div>          
        </Segment>
        <Button
          size="large"
          style={{
            marginTop: "1.5em",
            marginBottom: "1.5em",
            marginLeft: "40%",
            backgroundColor: "#ed3237",
            color: "white"
          }}
        >
          Load More
        </Button>
      </div>
    );
  }
}