import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { List, Container, Icon } from "semantic-ui-react";

import "../../../static/css/root.css";
import "./static/css/ambulance.css";

import ga1 from './static/img/1.jpg';
import ga2 from './static/img/2.jpg';
import ga3 from './static/img/3.jpg';
import ga4 from './static/img/4.jpg';
import ga5 from './static/img/5.jpg';

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
        right: "-98%",
        top: "-150px",
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
        top: "165px",
        left: "-5px",
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
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <Container style={{ width: "89em" }}>
      <br/>
        <div>
          <div className="ambulance-container" >
            <h4 className="header-name">GROUND AMBULANCE</h4>
            <div className="underscore" />
          </div>
          <Slider {...settings}>
            <div className='SliderContainer'>
              <List.Item className='link'>
                <Link to="/ambulance">
                  <div className='amb'>
                    <img src={ga1} alt=""/>    
                  </div>
                    <span className="amb-header">Ambulance-1</span>
                </Link>
              </List.Item>
            </div>
            <div className='SliderContainer'>
              <List.Item className='link'>
                <Link to="/ambulance">
                  <div className='amb'>
                    <img src={ga2} alt=""/>    
                  </div>
                    <span className="amb-header">Ambulance-2</span>
                </Link>
              </List.Item>
            </div>
            <div className='SliderContainer'>
              <List.Item className='link'>
                <Link to="/ambulance">
                  <div className='amb'>
                    <img src={ga3} alt=""/>    
                  </div>
                    <span className="amb-header">Ambulance-3</span>
                </Link>
              </List.Item>
            </div>
            <div className='SliderContainer'>
              <List.Item className='link'>
                <Link to="/ambulance">
                  <div className='amb'>
                    <img src={ga4} alt=""/>    
                  </div>
                    <span className="amb-header">Ambulance-4</span>
                </Link>
              </List.Item>
            </div>
            <div className='SliderContainer'>
              <List.Item className='link'>
                <Link to="/ambulance">
                  <div className='amb'>
                    <img src={ga5} alt=""/>    
                  </div>
                    <span className="amb-header">Ambulance-5</span>
                </Link>
              </List.Item>
            </div>

          </Slider>

        </div>
      </Container>
    );
  }
}