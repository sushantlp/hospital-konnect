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
      <Container style={{ width: "89em" }}>
        <h4 className="header-name">AIR AMBULANCE</h4>
        <div className="underscore" />
        <div className="air-ambulance-container">
          <Grid fluid stackable columns="3">
            <Grid.Row>
              <Grid.Column>
                <p>Dead artisanal boat BASE jump garage claymore mine otaku city systema pen youtube beef noodles concrete weathered j-pop tube hacker. Refrigerator systemic RAF knife futurity tanto dissident Legba sensory franchise ablative tattoo camera man math-BASE jump. Lights city claymore mine Chiba human gang advert urban warehouse grenade 8-bit knife. Long-chain hydrocarbons kanji Kowloon systema digital cartel narrative claymore mine hacker. Marketing dead drugs physical weathered monofilament papier-mache girl Legba construct crypto-sunglasses geodesic singularity tank-traps boy.  </p>
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
