import React from "react";
import Slider from "react-slick";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Container, Icon } from "semantic-ui-react";

import "./ambulance.css";

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
        top: "-143px",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      {/* <Icon
        name="angle right"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "1em"
        }}
      /> */}

      <img
        src="https://img.icons8.com/ios/20/000000/more-than-filled.png"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "0.5em"
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
        top: "175px",
        left: "-16px",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      {/* <Icon
        name="angle left"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "1em"
        }}
      /> */}
      <img
        src="https://img.icons8.com/ios/20/000000/less-than-filled.png"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "0.5em"
        }}
      />
    </div>
  );
}

export default class Ambulance extends React.Component {
  drawAmbulance = (key, header, image, obj) => {
    return (
      <div
        key={key}
        onClick={() => this.props.tripToDetailView(obj, "ambulance", 2)}
      >
        {/* <List.Item className="link"> */}
        {/* <Link to="/ambulance"> */}
        <div className="ambulance">
          <img src={image} alt={header} />
        </div>
        <span className="amb-header">{header}</span>
        {/* </Link> */}
        {/* </List.Item> */}
      </div>
    );
  };

  loopAmbulance = collection => {
    return collection.map((obj, key) => {
      return this.drawAmbulance(obj.col_id, obj.partner, obj.img, obj);
    });
  };

  render() {
    if (this.props.homeDetail.status === "START") return <div />;
    else if (this.props.homeDetail.status === "FAIL") return <div />;

    const object = this.props.homeDetail.homeDetail.GAMB;

    if (_.isEmpty(object.col_list)) return <div />;

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
        <br />
        <div>
          <div className="ambulance-container">
            <h4 className="header-name">GROUND AMBULANCE</h4>
            <div className="underscore" />
          </div>
          <Slider {...settings}>{this.loopAmbulance(object.col_list)}</Slider>
        </div>
      </Container>
    );
  }
}
