import React from "react";
import { Link, withRouter } from 'react-router-dom';

import { Container } from "semantic-ui-react";
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
      <br/>
          <h4 className="header-name">HOSPITALS</h4>
          <div className="underscore" /> <br/>
          <div className="tile is-ancestor is-vertical">
        <div className="tile is-parent">
          <Link to='/detail'>
            <div className="hos5 tile">    
              <div className='hostext'>
                  <span className="hospital-header">HOSPITAL-1</span>
                  <span className="hospital-subheader">Kalyannagar</span>
              </div>
            </div>
          </Link>            
          <Link to='/detail'>
            <div className="hos4 tile">    
              <div className='hostext'>
                  <span className="hospital-header">HOSPITAL-2</span>
                  <span className="hospital-subheader">Kalyannagar</span>
              </div>
            </div>
          </Link>            
        </div>
        <div className="tile is-parent">
          <Link to='/detail'>
            <div className="hos1 tile">    
              <div className='hostext'>
                  <span className="hospital-header">HOSPITAL-3</span>
                  <span className="hospital-subheader">Kalyannagar</span>
              </div>
            </div>
          </Link>
          <Link to='/detail'>
            <div className="hos3 tile">    
              <div className='hostext'>
                  <span className="hospital-header">HOSPITAL-4</span>
                  <span className="hospital-subheader">Kalyannagar</span>
              </div>
            </div>
          </Link>
          <Link to='/detail'>
            <div className="hos2 tile">    
              <div className='hostext'>
                  <span className="hospital-header">HOSPITAL-5</span>
                  <span className="hospital-subheader">Kalyannagar</span>
              </div>
            </div>
          </Link>
        </div>                      
         </div>      
      </Container>
      );
  }
}

export default withRouter(Hospital)