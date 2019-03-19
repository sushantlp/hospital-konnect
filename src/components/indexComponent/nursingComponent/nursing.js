import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Card, Container, Icon } from "semantic-ui-react";
import "../../../static/css/root.css";

export default class Nursing extends React.Component {
  render() {
    return (
      <Container style={{ width: "89em" }}>
      <div className="ambulance-container">
        <h4 className="header-name">NURSING CARE</h4>
        <div className="underscore" /><br/>
        <div className="columns">
              <div className="column">
                <Link to="/nursing">
                  <Card className="ui fluid card">
                    <div className="ui fluid image">
                      <img
                        src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124570/ballyhoo/BALLYHOO_WEBSITE/hospital1.jpg"
                        alt=""
                      />
                      <span className="hospital-header">Nursing Care-1</span>
                    </div>
                  </Card>
                </Link>
              </div>
              <div className="column">
                <Link to="/nursing">
                  <Card className="ui fluid card">
                    <div className="ui fluid image">
                      <img
                        src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124570/ballyhoo/BALLYHOO_WEBSITE/hospital1.jpg"
                        alt=""
                      />
                      <span className="hospital-header">Nursing Care-2</span>
                    </div>
                  </Card>
                </Link>
              </div>
              <div className="column">
                <Link to="/nursing">
                  <Card className="ui fluid card">
                    <div className="ui fluid image">
                      <img
                        src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124570/ballyhoo/BALLYHOO_WEBSITE/hospital1.jpg"
                        alt=""
                      />
                      <span className="hospital-header">Nursing Care-3</span>
                    </div>
                  </Card>
                </Link>
              </div>
              <div className="column">
                <Link to="/nursing">
                  <Card className="ui fluid card">
                    <div className="ui fluid image">
                      <img
                        src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124570/ballyhoo/BALLYHOO_WEBSITE/hospital1.jpg"
                        alt=""
                      />
                      <span className="hospital-header">Nursing Care-4</span>
                    </div>
                  </Card>
                </Link>
              </div>
              <div className="column">
                <Link to="/nursing">
                  <Card className="ui fluid card">
                    <div className="ui fluid image">
                      <img
                        src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124570/ballyhoo/BALLYHOO_WEBSITE/hospital1.jpg"
                        alt=""
                      />
                      <span className="hospital-header">Nursing Care-5</span>
                    </div>
                  </Card>
                </Link>
              </div>
          </div>
          <br/><br/>
        </div>
      </Container>
    );
  }
}