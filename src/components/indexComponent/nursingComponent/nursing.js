import React from "react";
// import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Card, Container } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/nursing.css";
import "./static/nursingComponent.css";

import n1 from './static/img/1.jpg';
import n2 from './static/img/2.jpg';
import n3 from './static/img/3.jpg';
import n4 from './static/img/4.jpg';
// import n5 from './static/img/5.jpg';

export default class Nursing extends React.Component {
  render() {
    return (
      <Container style={{ width: "89em" }}>
      <div className="ambulance-container">
        <h4 className="header-name">NURSING CARE</h4>
        <div className="underscore" />
        <br/>
        <div className="columns">
              <div className="column is-3">
                <Link to="/nursing">
                  <Card className="ui card">
                    <img src={n1} alt="" />
                  </Card>
                </Link>
                <span className="nursing-header">
                      <br/>Nursing Care-1
                </span>
              </div>
              <div className="column is-3">
                <Link to="/nursing">
                  <Card className="ui card">
                      <img src={n2} alt="" />
                  </Card>
                </Link>
                      <br/><span className="nursing-header">Nursing Care-2</span>
              </div>
              <div className="column is-3">
                <Link to="/nursing">
                  <Card className="ui card">
                      <img src={n3} alt="" />
                  </Card>
                </Link>
                      <br/>`<span className="nursing-header">Nursing Care-3</span>
              </div>
              <div className="column is-3">
                <Link to="/nursing">
                  <Card className="ui card">
                      <img src={n4} alt="" />
                  </Card>
                </Link>
                     <br/><span className="nursing-header">Nursing Care-4</span>
              </div>
          </div>
        </div>
      </Container>
    );
  }
}