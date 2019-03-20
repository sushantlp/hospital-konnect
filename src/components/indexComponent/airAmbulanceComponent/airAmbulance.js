import React from "react";
import { Route } from 'react-router-dom'
import { Container, Grid, Button } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/airAmbulance.css";

export default class AirAmbulance extends React.Component {
  gotoAA(){
    window.location.hash = "/ambulance";
  }

  render() {
    return (
      <Container style={{ width: "89em" }}><br/>
        <h4 className="header-name">AIR AMBULANCE</h4>
        <div className="underscore" />
        <div className="air-ambulance-container">
          <Grid fluid stackable columns="3">
            <Grid.Row>
              <Grid.Column>
                <Route render={(
                  {history}) => (
                    <Button onClick={() => { history.push('/ambulance') }}>Details</Button>
                  )} 
                />
              </Grid.Column>
              <Grid.Column/>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
  }
}
