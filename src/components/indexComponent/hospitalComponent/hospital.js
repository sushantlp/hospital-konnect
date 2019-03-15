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
              <div className="hos1 tile is-parent is-vertical">
                <div className="hoschild tile is-child">
                    <span className="hospital-header">HOSPITAL-1</span>
                  <p className="subtitle"></p>
                </div>
              </div>
              <div className="hos2 tile is-parent">
                <article className="hoschild tile is-child">
                  <p className="hospital-header">HOSPITAL-2</p>
                </article>
              </div>
            </div>
            <div className="hos3 tile is-parent">
              <article className="hoschild tile is-child">
                <p className="hospital-header">HOSPITAL-3</p>
              </article>
            </div>
          </div>
          <div className="hos4 tile is-parent">
              <div className="hoschild content">
                <p className="hospital-header">HOSPITAL-4</p>
                <div className="content">
                </div>
              </div>
          </div>
        </div>                  
      </Container>   
 
     );
  }
}