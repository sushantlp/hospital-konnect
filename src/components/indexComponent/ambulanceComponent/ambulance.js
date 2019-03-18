import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { List, Card, Container, Icon } from "semantic-ui-react";
import "../../../static/css/root.css";
import "./static/css/ambulance.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        position: "relative",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px 0 rgba(51, 60, 63, 0.22)",
        right: "-97%",
        top: "-100px",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      {" "}
      <Icon
        name="angle right"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "1em"
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        position: "relative",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px 0 rgba(51, 60, 63, 0.22)",
        top: "140px",
        left: "-25px",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      {" "}
      <Icon
        name="angle left"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "1em"
        }}
      />
    </div>
  );
}

export default class Ambulance extends React.Component {

  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Container style={{ width: "89em" }}>
        <div>
          <div className="ambulance-container" >
            <h4 className="header-name">AMBULANCE</h4>
            <div className="underscore" />
          </div>
          <Slider {...settings}>
            <div>
              <List.Item className='link'>
                <Link to="/ambulance">
                  <Card className="hospital-card">
                    <div className="ui fluid image">
                      <img
                        src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124570/ballyhoo/BALLYHOO_WEBSITE/hospital1.jpg"
                        alt=""
                      />
                      <span className="hospital-header">Hospital-1</span>
                    </div>
                  </Card>
                </Link>
              </List.Item>
            </div>
            <div>
              <Card className="hospital-card">
                <div className="ui fluid image">
                  <img
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124570/ballyhoo/BALLYHOO_WEBSITE/hospital3.jpg"
                    alt=""
                  />
                  <span className="hospital-header">Hospital-2</span>
                </div>
              </Card>
            </div>
            <div>
              <Card className="hospital-card">
                <div className="ui fluid image">
                  <img
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124571/ballyhoo/BALLYHOO_WEBSITE/hospital4.jpg"
                    alt=""
                  />
                  <span className="hospital-header">Hospital-3</span>
                </div>
              </Card>
            </div>
            <div>
              <Card className="hospital-card">
                <div className="ui fluid image">
                  <img
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124571/ballyhoo/BALLYHOO_WEBSITE/hospital8.jpg"
                    alt=""
                  />
                  <span className="hospital-header">Hospital-4</span>
                </div>
              </Card>
            </div>
            <div>
              <Card className="hospital-card">
                <div className="ui fluid image">
                  <img
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124571/ballyhoo/BALLYHOO_WEBSITE/hospital4.jpg"
                    alt=""
                  />
                  <span className="hospital-header">Hospital-5</span>
                </div>
              </Card>
            </div>
            <div>
              <Card className="hospital-card">
                <div className="ui fluid image">
                  <img
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1545124571/ballyhoo/BALLYHOO_WEBSITE/hospital4.jpg"
                    alt=""
                  />
                  <span className="hospital-header">Hospital-6</span>
                </div>
              </Card>
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
