import React from "react";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";
import { Animated } from "react-animated-css";

import "./static/css/animation.css";

export default class Animation extends React.Component {
  render() {
    return (
      <Container className="tileContainer">
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child box is-12 notification is-success">
                  <h1>One</h1>
                  <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic post-j-pop construct tower euro-pop semiotics singularity math-shoes. </p>
                </article>
                <article class="tile is-child box is-12 notification is-warning">                
                  <h1>Two</h1>
                  <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic post-j-pop construct tower euro-pop semiotics singularity math-shoes. Nodal point dissident DIY geodesic nodality beef noodles soul-delay. Convenience store car</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box notification is-danger">
                  <h1>Three</h1>
                  <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic post-j-pop construct tower euro-pop semiotics singularity math-shoes.  Construct Kowloon city nodal point euro-pop Tokyo futurity lights camera papier-mache voodoo god narrative jeans.  Network market wristwatch wonton soup soul-delay sprawl vinyl tube 3D-printed. Pen singularity cardboard uplink advert bomb augmented reality camera into faded car film sentient monofilament tower. Skyscraper sensory nodality courier boat disposable alcohol office corrupted range-rover render-farm camera girl post-semiotics. 
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child box is-12">
              <h1>Five</h1>
               <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic cyber-wristwatch corporation 8-bit table bicycle corrupted A.I. drugs city rebar bomb. Corrupted pistol sensory urban bridge fluidity singularity beef noodles ablative RAF DIY digital savant-ware 3D-printed sign. Ablative bridge dome semiotics-space Legba pre-engine. Engine drugs pen wonton soup pistol cartel sensory sentient narrative concrete shrine carbon. Military-grade artisanal-space vehicle chrome fluidity Kowloon skyscraper bomb concrete pen nano-neon tower spook tattoo. </p>
           </article>
            <article class="tile is-child box is-12 notification is-info">
              <h1>Four</h1>
               <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic cyber-wristwatch corporation 8-bit table bicycle corrupted A.I. drugs city rebar bomb. Corrupted pistol sensory urban bridge fluidity singularity beef noodles ablative RAF DIY digital savant-ware 3D-printed sign. Ablative bridge dome semiotics-space Legba pre-engine. Engine drugs pen wonton soup pistol cartel sensory sentient narrative concrete shrine carbon. Military-grade artisanal-space vehicle chrome fluidity Kowloon skyscraper bomb concrete pen nano-neon tower spook tattoo. </p>
           </article>
          </div>
        </div>
     </Container>
    );
  }
}