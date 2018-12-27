import React from "react";

import { Segment, Image, Grid, Icon } from "semantic-ui-react";
import "./static/css/hospital-doctor.css";

export default class HospitalDoctor extends React.Component {
  render() {
    return (
      <div>
        <h2 className="hospital-doctor-title">
          <span>Doctors in People Tree Hospitals</span>
        </h2>

        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={2}>
                <div>
                  <Image
                    floated="left"
                    size="tiny"
                    src="https://images1-fabric.practo.com/doctor/28406/dr-sandip-deshpande-59b659b8f2f94.png/thumbnail"
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={14}>
                <div>
                  <h1 className="doctor-name">
                    <span>Dr. Sandip Deshpande</span>
                  </h1>

                  <p className="doctor-long-profession">
                    <span>
                      MBBS, M.D. (Psychiatry), DPM (Psychiatry), MRCPsych, CCT
                      (UK), PG Diploma (Sexual & Relationship Psychotherapy)
                    </span>
                  </p>

                  <p className="doctor-experience">
                    <span>18 years experience</span>
                  </p>

                  <p className="doctor-profession">
                    <span>Psychiatrist</span>
                  </p>

                  <div className="clock-div">
                    <span>
                      <Icon
                        name="clock outline"
                        size="small"
                        style={{ fontSize: "0.9em" }}
                      />
                    </span>
                    <span className="doctor-week">MON-SUN</span>
                    <span className="doctor-time">8:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={2}>
                <div>
                  <Image
                    floated="left"
                    size="tiny"
                    src="https://images1-fabric.practo.com/doctor/28406/dr-sandip-deshpande-59b659b8f2f94.png/thumbnail"
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={14}>
                <div>
                  <h1 className="doctor-name">
                    <span>Dr. Sandip Deshpande</span>
                  </h1>

                  <p className="doctor-long-profession">
                    <span>
                      MBBS, M.D. (Psychiatry), DPM (Psychiatry), MRCPsych, CCT
                      (UK), PG Diploma (Sexual & Relationship Psychotherapy)
                    </span>
                  </p>

                  <p className="doctor-experience">
                    <span>18 years experience</span>
                  </p>

                  <p className="doctor-profession">
                    <span>Psychiatrist</span>
                  </p>

                  <div className="clock-div">
                    <span>
                      <Icon
                        name="clock outline"
                        size="small"
                        style={{ fontSize: "0.9em" }}
                      />
                    </span>
                    <span className="doctor-week">MON-SUN</span>
                    <span className="doctor-time">8:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={2}>
                <div>
                  <Image
                    floated="left"
                    size="tiny"
                    src="https://images1-fabric.practo.com/doctor/28406/dr-sandip-deshpande-59b659b8f2f94.png/thumbnail"
                  />
                </div>
              </Grid.Column>
              <Grid.Column width={14}>
                <div>
                  <h1 className="doctor-name">
                    <span>Dr. Sandip Deshpande</span>
                  </h1>

                  <p className="doctor-long-profession">
                    <span>
                      MBBS, M.D. (Psychiatry), DPM (Psychiatry), MRCPsych, CCT
                      (UK), PG Diploma (Sexual & Relationship Psychotherapy)
                    </span>
                  </p>

                  <p className="doctor-experience">
                    <span>18 years experience</span>
                  </p>

                  <p className="doctor-profession">
                    <span>Psychiatrist</span>
                  </p>

                  <div className="clock-div">
                    <span>
                      <Icon
                        name="clock outline"
                        size="small"
                        style={{ fontSize: "0.9em" }}
                      />
                    </span>
                    <span className="doctor-week">MON-SUN</span>
                    <span className="doctor-time">8:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </Grid.Column>

              {/* <Grid.Column width={2}> </Grid.Column> */}
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
