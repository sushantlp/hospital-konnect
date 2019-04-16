import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Card, Container, Icon } from "semantic-ui-react";
import "../../../static/css/root.css";

import "./static/css/nursing.css";

import n1 from "./static/img/1.jpg";
import n2 from "./static/img/2.jpg";
import n3 from "./static/img/3.jpg";
import n4 from "./static/img/4.jpg";
import n5 from "./static/img/5.jpg";

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
        top: "-145px",
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
        top: "160px",
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

export default class Nursing extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <Container style={{ width: "89em" }}>
        <div>
          <div className="nursing-container">
            <h4 className="header-name">NURSING CARE</h4>
            <div className="underscore" />
            <Slider {...settings}>
              <div>
                <Link to="/equipment">
                  <Card>
                    <div className="ui fluid image">
                      <img src={n1} alt="" />
                    </div>
                  </Card>
                  <span className="nursing-header">Medical Equipment-1</span>
                </Link>
              </div>
              <div>
                <Link to="/equipment">
                  <Card>
                    <div className="ui fluid image">
                      <img src={n2} alt="" />
                    </div>
                  </Card>
                  <span className="nursing-header">Medical Equipment-2</span>
                </Link>
              </div>
              <div>
                <Link to="/equipment">
                  <Card>
                    <div className="ui fluid image">
                      <img src={n3} alt="" />
                    </div>
                  </Card>
                  <span className="nursing-header">Medical Equipment-3</span>
                </Link>
              </div>
              <div>
                <Link to="/equipment">
                  <Card>
                    <div className="ui fluid image">
                      <img src={n4} alt="" />
                    </div>
                  </Card>
                  <span className="nursing-header">Medical Equipment-4</span>
                </Link>
              </div>
              <div>
                <Link to="/equipment">
                  <Card>
                    <div className="ui fluid image">
                      <img src={n5} alt="" />
                    </div>
                  </Card>
                  <span className="nursing-header">Medical Equipment-5</span>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    );
  }
}
