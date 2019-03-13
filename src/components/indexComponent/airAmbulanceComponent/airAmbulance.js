import React from "react";
import { Grid, Button } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/airAmbulance.css";

export default class AirAmbulance extends React.Component {
  tgl_ModalForm(){
   var div = document.getElementById('modal');
      div.style.display = div.style.display == "none" ? "block" : "none";    
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
            <p>Dead artisanal boat BASE jump garage claymore mine otaku city systema pen youtube beef noodles concrete weathered j-pop tube hacker. Refrigerator systemic RAF knife futurity tanto dissident Legba sensory franchise ablative tattoo camera man math-BASE jump. Lights city claymore mine Chiba human gang advert urban warehouse grenade 8-bit knife. Long-chain hydrocarbons kanji Kowloon systema digital cartel narrative claymore mine hacker. Marketing dead drugs physical weathered monofilament papier-mache girl Legba construct crypto-sunglasses geodesic singularity tank-traps boy. <br/>Shoes DIY market pen pre-soul-delay post-camera media lights disposable geodesic tower sign-ware. DIY concrete camera drone tube papier-mache tanto weathered ablative render-farm alcohol shrine dead car boy Kowloon decay. Fetishism bicycle systema table bomb hacker dead silent smart-sprawl. Industrial grade urban 3D-printed fetishism San Francisco sprawl long-chain hydrocarbons. Post-carbon footage skyscraper Shibuya sensory corrupted face forwards city range-rover drugs. Chrome urban warehouse systemic singularity Tokyo Kowloon plastic neural dome free-market j-pop computer. Shoes assassin hotdog cartel alcohol shrine receding. Kanji grenade BASE jump human cyber-faded industrial grade nano-market realism dissident sign soul-delay uplink concrete. Katana woman beef noodles boy kanji warehouse tower rain narrative ablative crypto-film apophenia geodesic. </p>
              <Button
                inverted
                color="white"
                onClick={this.tgl_ModalForm}
              >
                Book Air Ambulance
              </Button>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
          <div class="modal" id="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Air Ambulance Booking</p>
                <button onClick={this.tgl_ModalForm} class="delete" aria-label="close"></button>
              </header>
              <section class="modal-card-body">
                <p>Claymore mine fluidity shoes media crypto-meta-numinous alcohol girl car drugs neon shrine shanty town engine papier-mache Shibuya. Uplink advert euro-pop camera shanty town grenade saturation point knife. Savant skyscraper lights rebar pre-crypto-A.I. numinous camera boy beef noodles rain marketing nodality vehicle 8-bit semiotics. Wristwatch semiotics 3D-printed systemic paranoid 8-bit numinous camera DIY geodesic drone footage Shibuya systema tube film jeans. Bicycle vinyl market neon geodesic industrial grade monofilament. Office semiotics advert free-market augmented reality paranoid corrupted numinous nodal point-space denim lights. </p>
                <input class="input" type="text" placeholder="Name" /><br/>
                <textarea class="input" type="text" placeholder="Address" rows="10">

                </textarea>
                <input class="input" type="text" placeholder="Telephone Number" /><br/>
                <input class="input" type="text" placeholder="Email" /><br/>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-success">BOOK AIR AMBULANCE</button>
                <button class="button" onClick={this.tgl_ModalForm}>Cancel</button>
              </footer>
            </div>
          </div>
      </div>
    );
  }
}
