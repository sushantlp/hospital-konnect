import React from "react";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";
import { Animated } from "react-animated-css";
import Header from "../headerComponent/header"
import "./static/css/animation.css";

export default class Animation extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="tileContainer">
          <div class="tile is-ancestor">
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child hospital-card is-12 notification is-success doctor hover">
                    <h1>Hospitals</h1>
                    <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic post-j-pop construct tower euro-pop semiotics singularity math-shoes. </p>
                  </article>
                  <article class="tile is-child hospital-card is-12 notification is-warning nurse hover">                
                    <h1>Nursing</h1>
                    <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic post-j-pop construct tower euro-pop semiotics singularity math-shoes. Nodal point dissident DIY geodesic nodality beef noodles soul-delay. Convenience </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child hospital-card notification is-danger ambulance hover">
                    <h1>Ambulances</h1>
                    <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic post-j-pop construct tower euro-pop semiotics singularity math-shoes.  Construct Kowloon city nodal point euro-pop Tokyo futurity lights camera papier-mache voodoo god narrative jeans.  Network market wristwatch wonton soup soul-delay sprawl vinyl tube 3D-printed. Pen singularity hospital-cardboard  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child hospital-card is-12 notification is-dark equipment hover">
                <h1>Medical Equipment</h1>
                 <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic cyber-wristwatch corporation 8-bit table bicycle corrupted A.I. drugs city rebar bomb. Corrupted pistol sensory urban bridge fluidity singularity beef noodles ablative RAF DIY digital savant-ware 3D-printed sign. Ablative bridge dome semiotics-space Legba pre-engine. Engine drugs pen wonton soup pistol cartel sensory sentient narrative concrete shrine carbon. Military-grade artisanal-space vehicle chrome fluidity Kowloon skyscraper bomb concrete pen nano-neon tower spook tattoo. </p>
             </article>
              <article class="tile is-child hospital-card is-12 notification is-info aambulance hover">
                <h1>Air Ambulance</h1>
                 <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic cyber-wristwatch corporation 8-bit table bicycle corrupted A.I. drugs city rebar bomb. Corrupted pistol sensory urban bridge fluidity singularity beef noodles ablative RAF DIY digital savant-ware 3D-printed sign. Ablative bridge dome semiotics-space Legba pre-engine. Engine drugs pen wonton soup pistol cartel sensory sentient narrative concrete shrine carbon. Military-grade artisanal-space vehicle chrome fluidity Kowloon skyscraper bomb concrete pen nano-neon tower spook tattoo. </p>
             </article>
            </div>
          </div>
       </Container>
      </div>        

    );
  }
}