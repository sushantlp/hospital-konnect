import React from "react";

import { Dropdown, Grid, Icon, Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./static/css/search.css";

export default class Search extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "auto",
          height: "500px",
          backgroundImage:
            "url('https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1555316722/ballyhoo/BALLYHOO_WEBSITE/arseny-togulev-1393380-unsplash.jpg')",
          overflow: "hidden"
        }}
      >
        <Grid divided="vertically" style={{ marginTop: "15vh" }}>
          <Grid.Column>
            <h1 className="background-heading">Your home for health</h1>
          </Grid.Column>
        </Grid>

        <Container>
          <Grid stackable columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Dropdown
                  placeholder="City"
                  search
                  fluid
                  selection
                  style={{ height: "50px" }}
                  icon={
                    <Icon
                      name="map marker alternate"
                      style={{
                        marginRight: "-2vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Dropdown
                  placeholder="Locality"
                  fluid
                  search
                  selection
                  style={{ height: "50px" }}
                  icon={
                    <Icon
                      name="map marker alternate"
                      style={{
                        marginRight: "-2vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </Grid.Column>

              <Grid.Column>
                <Dropdown
                  placeholder="Search"
                  fluid
                  search
                  selection
                  style={{ height: "50px" }}
                  icon={
                    <Icon
                      name="search"
                      style={{
                        marginTop: "-1.5vh",
                        float: "right",
                        color: "grey"
                      }}
                    />
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
