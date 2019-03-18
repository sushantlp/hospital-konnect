import React from "react";
import {withRouter} from 'react-router-dom';
import {Container, Grid} from "semantic-ui-react/dist/commonjs";
import {Animated} from "react-animated-css";
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
                    <p> </p>
                  </article>
                  <article class="tile is-child notification is-warning nurse hover">                
                    <h1>Nursing</h1>
                    <p><br/><br/><br/> </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-danger ambulance hover">
                    <h1>Ambulances</h1>
                    <p><span className="adjustment"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/><br/><br/> </span>
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-dark equipment hover">
                <h1>Medical Equipment</h1>
                 <p></p>
             </article>
              <article class="tile is-child notification is-info aambulance hover">
                <h1>Air Ambulance</h1>
                 <p className="mark"><br/><br/><br/><br/><br/><br/><br/></p>
             </article>
            </div>
          </div>
       </div>
    </div>        
    );
  }
}