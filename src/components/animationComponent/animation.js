import React from "react";
import {withRouter} from 'react-router-dom';
import { Container, Grid } from "semantic-ui-react/dist/commonjs";
import { Animated } from "react-animated-css";
import Header from "../headerComponent/header"
import "./static/css/animation.css";

export default class Animation extends React.Component {
  nextPath = (path) => {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="tileContainer" onClick={() => this.nextPath('/initial') }>
          <div class="tile is-ancestor">
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-success doctors hover">
                    <h1>Hospitals</h1>
                    <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic post-j-pop construct tower euro-pop semiotics singularity math-shoes. Computer dome Kowloon cyber-shanty town nodality knife sunglasses dead. Computer Tokyo marketing monofilament BASE jump receding voodoo god-ware footage meta-tube. </p>
                  </article>
                  <article class="tile is-child notification is-warning nurse hover">                
                    <h1>Nursing</h1>
                    <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic post-j-pop construct tower euro-pop semiotics singularity math-shoes. Nodal point dissident DIY geodesic nodality beef noodles soul-delay. Convenience<br/><br/><br/> </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-danger ambulance hover">
                    <h1>Ambulances</h1>
                    <p><span className="adjustment">Euro-pop faded lights meta-tower weathered girl hotdog garage otaku drone neuralowloon A.I. Legba corporation wonton soup. Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic post-j-pop construct tower euro-pop semiotics singularity math-shoes.  Construct Kowloon city nodal point euro-pop Tokyo futurity lights camera papier-mache voodoo god narrative jeans. Network market wristwatch wonton soup soul-delay sprawl vinyl tube 3D-printed. Pen singularity hospital-cardboard.<br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/><br/><br/> </span>
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-dark equipment hover">
                <h1>Medical Equipment</h1>
                 <p>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic cyber-wristwatch corporation 8-bit table bicycle corrupted A.I. drugs city rebar bomb. Corrupted pistol sensory urban bridge fluidity singularity beef noodles ablative RAF DIY digital savant-ware 3D-printed sign. Ablative bridge dome semiotics-space Legba pre-engine. Engine drugs pen wonton soup pistol cartel sensory sentient narrative concrete shrine carbon. Military-grade artisanal-space vehicle chrome fluidity Kowloon skyscraper bomb concrete pen nano-neon tower spook tattoo. Tube Chiba ablative computer Legba rebar hacker jeans disposable dead kanji Kowloon pistol motion. Paranoid sunglasses media sub-orbital pistol youtube papier-mache claymore mine ablative long-chain hydrocarbons towards futurity semiotics. San Francisco Shibuya tank-traps ablative</p>
             </article>
              <article class="tile is-child notification is-info aambulance hover">
                <h1>Air Ambulance</h1>
                 <p className="mark"><br/><br/><br/><br/>Post-engine tube human range-rover DIY concrete physical shoes A.I. savant carbon tanto courier realism. Vehicle geodesic cyber-wristwatch corporation 8-bit table bicycle corrupted A.I. drugs city rebar bomb. Corrupted pistol sensory urban bridge fluidity singularity beef noodles ablative RAF DIY digital savant-ware 3D-printed sign. Ablative bridge dome semiotics-space Legba pre-engine. Engine drugs pen wonton soup pistol cartel sensory sentient narrative concrete shrine carbon. Military-grade artisanal-space vehicle chrome fluidity Kowloon skyscraper bomb concrete pen nano-neon tower spook tattoo.<br/><br/><br/></p>
             </article>
            </div>
          </div>
       </div>
    </div>        
    );
  }
}