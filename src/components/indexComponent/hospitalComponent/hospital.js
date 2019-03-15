import React from "react";
import { Card, Container, Button } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/hospital.css";

export default class Hospital extends React.Component {
  render() {
    return (
            <Container style={{ width: "89em" }}>
        <h4 className="header-name">HOSPITAL</h4>
        <div className="underscore" /> 
        <div className="tile is-ancestor nursingcontainer">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical hospital-card">
                <article className="hos1 tile is-child notification is-primary card">
                  <p className="hospital-header">HOSPITAL-1</p>
                  <p className="subtitle"></p>
                </article>
              </div>
              <div className="tile is-parent hospital-card">
                <article className="hos3 tile is-child notification is-info card">
                  <p className="hospital-header">HOSPITAL-3</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent hospital-card">
              <article className="hos4 tile is-child notification is-danger card">
                <p className="hospital-header">HOSPITAL-4</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent hospital-card">
            <article className="hos5 card tile is-child notification is-success">
              <div className="content">
                <p className="hospital-header">HOSPITAL-5</p>
                <div className="content">
                  <mark>Soul-delay computer corporation render-farm bomb market dome plastic 8-bit boat face forwards nodal point hacker corrupted.-ware systema geodesic paranoid corporation 8-bit cyber-denim sensory euro-pop A.I.. Nodal point savant bicycle sentient urban table systemic into courier. Digital apophenia RAF marketing advert sensory sub-orbital assassin hacker wonton soup footage DIY.</mark>               
                </div>
              </div>
            </article>
          </div>
        </div>                  
      </Container>   
 
     );
  }
}