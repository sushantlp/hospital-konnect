import React from "react";

import { Grid, Button } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/airAmbulance.css";

export default class AirAmbulance extends React.Component {
  showModalForm(){
    console.log('modal')
  }

  render() {
    return (
      <div className="air-ambulance-container">
        <div className="header-container">
          <h4 className="header-name">AIR AMBULANCE</h4>
          <div className="underscore" />
        </div>
        <Grid fluid stackable columns="3">
          <Grid.Row>
            <Grid.Column>
            <p>Dead artisanal boat BASE jump garage claymore mine otaku city systema pen youtube beef noodles concrete weathered j-pop tube hacker. Refrigerator systemic RAF knife futurity tanto dissident Legba sensory franchise ablative tattoo camera man math-BASE jump. Lights city claymore mine Chiba human gang advert urban warehouse grenade 8-bit knife. Long-chain hydrocarbons kanji Kowloon systema digital cartel narrative claymore mine hacker. Marketing dead drugs physical weathered monofilament papier-mache girl Legba construct crypto-sunglasses geodesic singularity tank-traps boy. <br/>Shoes DIY market pen pre-soul-delay post-camera media lights disposable geodesic tower sign-ware. DIY concrete camera drone tube papier-mache tanto weathered ablative render-farm alcohol shrine dead car boy Kowloon decay. Fetishism bicycle systema table bomb hacker dead silent smart-sprawl. Industrial grade urban 3D-printed fetishism San Francisco sprawl long-chain hydrocarbons. Post-carbon footage skyscraper Shibuya sensory corrupted face forwards city range-rover drugs. Chrome urban warehouse systemic singularity Tokyo Kowloon plastic neural dome free-market j-pop computer. Shoes assassin hotdog cartel alcohol shrine receding. Kanji grenade BASE jump human cyber-faded industrial grade nano-market realism dissident sign soul-delay uplink concrete. Katana woman beef noodles boy kanji warehouse tower rain narrative ablative crypto-film apophenia geodesic. <br/>Smart-sign long-chain hydrocarbons savant engine Chiba advert lights hacker digital assault. Sensory free-market garage wonton soup uplink assassin kanji otaku sign alcohol sprawl receding urban fluidity tattoo rifle. Stimulate media human geodesic math-sign assault courier apophenia boy alcohol gang. Savant drugs drone ablative engine Chiba katana stimulate sentient saturation point. DIY silent meta-pre-car systemic semiotics dissident courier. </p>
              <Button
                inverted
                color="white"
                onClick={this.showModalForm}
              >
                Book Air Ambulance
              </Button>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
