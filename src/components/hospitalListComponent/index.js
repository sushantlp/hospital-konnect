import React from "react";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";

import HospitalFilter from "./hospitalFilterComponent/hospitalFilter";
import HospitalCard from "./hospitalCardComponent/hospitalCard";
import Header from "../headerComponent/header";
import "./static/css/index.css";

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="hospital">
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={4} style={{ cursor: "pointer" }}>
                <HospitalFilter />
              </Grid.Column>
              <Grid.Column width={12} style={{ cursor: "pointer" }}>
                <HospitalCard />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
