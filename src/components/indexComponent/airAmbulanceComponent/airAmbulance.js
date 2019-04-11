import React from "react";
import { Route } from 'react-router-dom'
import { Container, Grid, Button } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/airAmbulance.css";

export default class AirAmbulance extends React.Component {
  gotoAA(){
    window.location.hash = "/airambulance";
  }

  render() {
    return (
      <Container style={{ width: "89em" }}><br/>
        <h4 className="header-name">AIR AMBULANCE</h4>
        <div className="underscore" /><br/>
          <Grid fluid stackable columns="3">
            <Grid.Row>
              <Grid.Column>
                <p>Grenade sprawl nodality pistol film decay vehicle BASE jump network-space artisanal-ware car savant table rebar receding. Bicycle skyscraper weathered neural franchise pen paranoid. Sensory decay voodoo god paranoid fetishism city nodal point tattoo spook uplink cardboard crypto. Cyber-vinyl tank-traps crypto-fetishism film futurity uplink dissident 8-bit cartel footage sunglasses corporation. Wristwatch plastic tower augmented reality knife computer media sub-orbital alcohol vehicle human shrine soul-delay industrial grade. Courier otaku ablative 8-bit DIY tattoo table. Katana monofilament film vinyl media dome DIY warehouse. Chiba math-narrative convenience store refrigerator pen computer silent corporation face forwards. Concrete bicycle table Kowloon tattoo sprawl DIY weathered ablative motion vehicle RAF sentient 8-bit car bridge.-space tanto claymore mine denim monofilament systema cardboard Chiba narrative city meta-nodality shrine face forwards neural film boat. </p>
                <Route render={(
                  {history}) => (
                    <Button onClick={() => { history.push('/airambulance') }}>Details</Button>
                  )} 
                />
                
              </Grid.Column>
              <Grid.Column>
              <div className="air-ambulance-container"></div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        
      </Container>
    );
  }
}
