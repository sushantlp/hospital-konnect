import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Card, Container } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/nursing.css";

import n1 from "./static/img/1.jpg";
import n2 from "./static/img/2.jpg";
import n3 from "./static/img/3.jpg";
import n4 from "./static/img/4.jpg";
import n5 from "./static/img/5.jpg";

export default class Nursing extends React.Component {
  render() {
    return (
      <Container style={{ width: "89em" }}>
        <div className="nursing-container">
          <h4 className="header-name">NURSING CARE</h4>
          <div className="underscore" />
          <br />
          <br />
          <div className="columns">
            <div className="column is-3">
              <Link to="/nursing">
                <Card className="ui card">
                  <img src={n1} alt="" />
                </Card>
                <span className="nursing-header">Nursing Care-1</span>
              </Link>
            </div>
            <div className="column is-3">
              <Link to="/nursing">
                <Card className="ui card">
                  <img src={n2} alt="" />
                </Card>
                <span className="nursing-header">Nursing Care-2</span>
              </Link>
            </div>
            <div className="column is-3">
              <Link to="/nursing">
                <Card className="ui card">
                  <img src={n3} alt="" />
                </Card>
                <span className="nursing-header">Nursing Care-3</span>
              </Link>
            </div>
            <div className="column is-3">
              <Link to="/nursing">
                <Card className="ui card">
                  <img src={n4} alt="" />
                </Card>
                <span className="nursing-header">Nursing Care-4</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
