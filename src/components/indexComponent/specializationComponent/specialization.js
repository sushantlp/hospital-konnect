import React from "react";
import { Container, Grid } from "semantic-ui-react";
import _ from "lodash";
import "./specialization.css";

export default class Specialization extends React.Component {
  drawSpecialization = (key, header, image, obj) => {
    return (
      <Grid.Column
        style={{ cursor: "pointer" }}
        key={key}
        obj={obj}
        onClick={() => this.onClickSpecialization(obj)}
      >
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
      return this.drawSpecialization(obj.spl_id, obj.spl_name, obj.img, obj);
    });
  };

  onClickSpecialization = obj => {
    const categoryUrl = obj.spl_name.replace(/ /g, "-").toLowerCase();

    // Url Change
    this.props.parentProps.history.push({
      pathname: `${
        this.props.parentProps.match.params.locality
      }/${categoryUrl}`,
      search: `?city=${this.props.parentState.cityId}&locality=${
        this.props.parentState.localityId
      }&type=${obj.type}&category=${obj.cat_id}&q=${obj.key_id}`,
      state: { data: obj }
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
