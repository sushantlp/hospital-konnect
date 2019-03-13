import React from "react";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";
import { Animated } from "react-animated-css";

import "./static/css/animation.css";

export default class Animation extends React.Component {
  render() {
    return (
      <Container style={{ width: "89em" }}>
        <div className="tile is-ancestor nursingcontainer">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical hospital-card">
                <article className="tile is-child notification is-primary card">
                  <p className="hospital-header">HOSPITAL-1</p>
                  <p className="subtitle"></p>
                </article>
              </div>
              <div className="tile is-parent hospital-card">
                <article className="tile is-child notification is-info card">
                  <p className="hospital-header">HOSPITAL-3</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent hospital-card">
              <article className="tile is-child notification is-danger card">
                <p className="hospital-header">HOSPITAL-4</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent hospital-card">
            <article className="card tile is-child notification is-success">
              <div className="content">
                <p className="hospital-header">HOSPITAL-5</p>
                <div className="content">
                </div>
              </div>
            </article>
          </div>
          <div className="tile is-parent hospital-card">
            <article className="card tile is-child notification is-info">
              <div className="content">
                <p className="hospital-header">HOSPITAL-5</p>
                <div className="content">
                </div>
              </div>
            </article>
          </div>
``        </div>                  
      </Container>
    );
  }
}
