import React from "react";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";

import "./static/css/index.css";

export default class Index extends React.Component {
  render() {
    return (
      <Container fluid>
        <Grid stackable columns="2">
          <Grid.Row>
            <Grid.Column style={{ cursor: "pointer" }} />
            <Grid.Column style={{ cursor: "pointer" }} />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
