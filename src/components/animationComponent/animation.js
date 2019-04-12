import React from "react";
// import {withRouter} from 'react-router-dom';
// import {Container, Grid} from "semantic-ui-react/dist/commonjs";
// import {Animated} from "react-animated-css";
// import Header from "../headerComponent/header"
import "./static/css/animation.css";

export default class Animation extends React.Component {
  nextPath = (path) => {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="overall">
        <div className="tileContainer" onClick={() => this.nextPath('/initial') }>
          <div class="tile is-ancestor">
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-success nurse hover">
                    <h1><span  className='shadow_text'>Nursing Care</span></h1>
                  </article>
                  <article class="tile is-child notification is-warning aambulance hover">
                    <h1><span  className='shadow_text'>Air Ambulance</span></h1>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-danger ambulance hover">
                    <h1><span  className='shadow_text'>Hospitals</span></h1>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-warning hover gambulance">
                <h1><span  className='shadow_text'>Ground Ambulance</span></h1>
                 <p></p>
             </article>
              <article class="tile is-child notification is-warning equipment hover">
                <h1><span  className='shadow_text'>Medical Equipment</span></h1>
                 
             </article>
            </div>
          </div>
       </div>
    </div>        
    );
  }
}