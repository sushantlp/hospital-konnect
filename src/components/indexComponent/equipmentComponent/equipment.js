import React from "react";
import Slider from "react-slick";
import { Card, Container, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../../static/css/root.css";

import "./static/css/equipment.css";

import e1 from './static/img/1.jpg';
import e2 from './static/img/2.jpg';
import e3 from './static/img/3.jpg';
import e4 from './static/img/4.jpg';
import e5 from './static/img/5.jpg';

  
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

export default class Equipment extends React.Component {
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
          <div className="ambulance-container">
            <h4 className="header-name">
                MEDICAL EQUIPMENT
            </h4>
            <div className="underscore" />
              <Slider {...settings}>
                <div>
                <Link to='/equipment'>
                  <Card className="hospital-card">
                    <div className="ui fluid image">
                      <img src={e1} alt=""/>
                    </div>
                  </Card>
                      <span className="equip-header">Medical Equipment-1</span>
                  </Link>
                 </div>
                 <div>
                  <Card className="hospital-card">
                    <div className="ui fluid image">
                      <img src={e2} alt=""/>
                    </div>
                  </Card>
                      <span className="equip-header">Medical Equipment-2</span>
                </div>
            <div>
              <Card className="hospital-card">
                <div className="ui fluid image">
                  <img src={e3} alt=""/>
                </div>
              </Card>
                  <span className="equip-header">Medical Equipment-3</span>
             </div>
             <div>
              <Card className="hospital-card">
                <div className="ui fluid image">
                  <img src={e4} alt=""/>
                </div>
              </Card>
                  <span className="equip-header">Medical Equipment-4</span>
             </div>
             <div>
              <Card className="hospital-card">
                <div className="ui fluid image">
                  <img src={e5} alt=""/>
                </div>
              </Card>
              <span className="equip-header">Medical Equipment-5</span>
             </div>
          </Slider>
          </div>
        </div>
      </Container>
    );
  }
}
