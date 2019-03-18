import React from "react";
import {Link,withRouter} from 'react-router-dom';

import { Card, Container, Button } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/hospital.css";

class Hospital extends React.Component {
  nextPath = (path) => {
    console.log(path)
    this.props.history.push(path);
  }

  render() {
    return (
        <Container style={{ width: "89em" }}>
        <h4 className="header-name">HOSPITAL</h4>
        <div className="underscore" /> 
        <div className="tile is-ancestor nursingcontainer">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="hos1 tile is-parent is-vertical">
                <Link to='/detail'>
                  <div className="hoschild tile is-child">
                      <span>HOSPITAL-1</span>
                  </div>
                </Link>
              </div>
                <Link to='/detail'>
                  <div className="hos2 tile is-parent">
                    <article className="hoschild tile is-child">
                      <p>HOSPITAL-2</p>
                    </article>
                  </div>
                </Link>
            </div>
            <div className="hos3 tile is-parent">
              <article className="hoschild tile is-child">
                <Link to='/detail'>
                  <div className="hoschild tile is-child">
                      <span>HOSPITAL-3</span>
                  </div>
                </Link>
              </article>
            </div>
          </div>
          <div className="hos4 tile is-parent is-vertical">
              <div className="hoschild content">
                <Link to='/detail'>
                  <div className="hoschild tile is-child">
                      <span>HOSPITAL-4</span>
                  </div>
                </Link>
                <div className="content">
                </div>
              </div>
              <div className="hoschild content">
                <Link to='/detail'>
                  <div className="hos5 hoschild tile is-child">
                      <span>HOSPITAL-5</span>
                  </div>
                </Link>
                <div className="content">
                </div>
              </div>              
          </div>
        </div>                  
      </Container>   
 
     );
  }
}

export default withRouter(Hospital)