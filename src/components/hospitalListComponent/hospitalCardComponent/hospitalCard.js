import React from "react";

import { Segment, Image, Grid, Icon } from "semantic-ui-react/dist/commonjs";

import "./static/css/hospitalCard.css";

export default class HospitalCard extends React.Component {
  render() {
    return (
      <div>
        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <Image
                  floated="left"
                  size="tiny"
                  src="https://images1-fabric.practo.com/535a0fc2301e403ceecc1626fa5fdf0a82bc5c51ef2de.png/thumbnail"
                />
                <div>
                  <a href="">
                    <h3 className="hospital-name">People Tree Hospitals</h3>
                  </a>
                  <span className="hospital-specialist">
                    Multi-SpecialityHospital
                  </span>

                  <div className="space-one">
                    <span className="doctor-count">71 Doctors</span>
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
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <Image
                  floated="left"
                  size="tiny"
                  src="https://images1-fabric.practo.com/535a0fc2301e403ceecc1626fa5fdf0a82bc5c51ef2de.png/thumbnail"
                />
                <div>
                  <a href="">
                    <h3 className="hospital-name">People Tree Hospitals</h3>
                  </a>
                  <span className="hospital-specialist">
                    Multi-SpecialityHospital
                  </span>

                  <div className="space-one">
                    <span className="doctor-count">71 Doctors</span>
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
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <Image
                  floated="left"
                  size="tiny"
                  src="https://images1-fabric.practo.com/535a0fc2301e403ceecc1626fa5fdf0a82bc5c51ef2de.png/thumbnail"
                />
                <div>
                  <a href="">
                    <h3 className="hospital-name">People Tree Hospitals</h3>
                  </a>
                  <span className="hospital-specialist">
                    Multi-SpecialityHospital
                  </span>

                  <div className="space-one">
                    <span className="doctor-count">71 Doctors</span>
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
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
