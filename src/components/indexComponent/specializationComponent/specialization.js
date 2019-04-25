import React from "react";

import { Container, Grid } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/specialization.css";

export default class Specialization extends React.Component {
  render() {
    return (
      <Container className="specialization-container" style={{ width: "89em" }}>
        <div className="header-container">
          <h4 className="header-name">SPECIALIZATION</h4>
          <div className="underscore" />
        </div>

        <Grid stackable columns="6">
          <Grid.Row>
            <Grid.Column style={{ cursor: "pointer" }}>
              <div className="single_department">
                <div className="dpmt-thumb">
                  <img
                    src="https://colorlib.com/preview/theme/medicare2/img/department/d-icon1.png"
                    alt=""
                  />
                </div>

                <h4>Cardiology</h4>
              </div>
            </Grid.Column>
            <Grid.Column style={{ cursor: "pointer" }}>
              <div className="single_department">
                <div className="dpmt-thumb">
                  <img
                    src="https://colorlib.com/preview/theme/medicare2/img/department/d-icon2.png"
                    alt=""
                  />
                </div>

                <h4>Urology</h4>
              </div>
            </Grid.Column>
            <Grid.Column style={{ cursor: "pointer" }}>
              <div className="single_department">
                <div className="dpmt-thumb">
                  <img
                    src="https://colorlib.com/preview/theme/medicare2/img/department/d-icon3.png"
                    alt=""
                  />
                </div>

                <h4>Dental Care</h4>
              </div>
            </Grid.Column>
            <Grid.Column style={{ cursor: "pointer" }}>
              <div className="single_department">
                <div className="dpmt-thumb">
                  <img
                    src="https://colorlib.com/preview/theme/medicare2/img/department/d-icon4.png"
                    alt=""
                  />
                </div>

                <h4>Eye Care</h4>
              </div>
            </Grid.Column>
            <Grid.Column style={{ cursor: "pointer" }}>
              <div className="single_department">
                <div className="dpmt-thumb">
                  <img
                    src="https://colorlib.com/preview/theme/medicare2/img/department/d-icon5.png"
                    alt=""
                  />
                </div>

                <h4>Neurology</h4>
              </div>
            </Grid.Column>
            <Grid.Column style={{ cursor: "pointer" }}>
              <div className="single_department">
                <div className="dpmt-thumb">
                  <img
                    src="https://colorlib.com/preview/theme/medicare2/img/department/d-icon6.png"
                    alt=""
                  />
                </div>

                <h4>Dermatology</h4>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
