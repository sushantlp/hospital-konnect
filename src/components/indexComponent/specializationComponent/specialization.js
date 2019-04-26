import React from "react";

import { Container, Grid } from "semantic-ui-react";
import _ from "lodash";
// import "../../../static/css/root.css";
import "./specialization.css";

export default class Specialization extends React.Component {
  drawSpecialization = (key, header, image) => {
    return (
      <Grid.Column style={{ cursor: "pointer" }} key={key}>
        <div className="single_department">
          <div className="dpmt-thumb">
            <img src={image} alt={header} />
          </div>

          <h4>{header}</h4>
        </div>
      </Grid.Column>
    );
  };

  loopSpecialization = collection => {
    return collection.map((obj, key) => {
      return this.drawSpecialization(obj.spl_id, obj.spl_name, obj.img);
    });
  };

  render() {
    if (this.props.homeDetail.status === "START") return <div />;
    else if (this.props.homeDetail.status === "FAIL") return <div />;

    if (_.isEmpty(this.props.homeDetail.homeDetail.specializations))
      return <div />;
    return (
      <Container className="specialization-container" style={{ width: "89em" }}>
        <div className="header-container">
          <h4 className="header-name">SPECIALIZATION</h4>
          <div className="underscore" />
        </div>

        <Grid stackable columns="6">
          <Grid.Row>
            {this.loopSpecialization(
              this.props.homeDetail.homeDetail.specializations
            )}
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
