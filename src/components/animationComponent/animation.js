import React from "react";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";
import { Animated } from "react-animated-css";

import "./static/css/animation.css";

export default class Animation extends React.Component {
  render() {
    return (
      <div  className="anim">
        <div className="tile is-ancestor">
            <div className="tile">
              <div className="tile is-parent">
                <article className="tile is-child card is-vertical">
                  <p className="hospital-header">HOSPITALS 1</p>
                  <p className="subtitle"></p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child is-dark card">
                  <p className="hospital-header">HOSPITALS</p>
                  <p className="subtitle"></p>
                </article>
              </div>
            <div className="tile is-parent">
              <article className="tile is-child is-dark card">
                <p className="hospital-header">MEDICAL EQUIPMENT</p>
              </article>
            </div>
          <div className="tile is-parent">
            <article className="card tile is-child is-dark">
              <div className="content">
                <p className="hospital-header">AMBULANCE</p>
                <div className="content">
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child is-dark card">
              <p className="hospital-header">NURSING</p>
            </article>
          </div>
            </div>
          </div>
        </div>                  
    );
  }
}
