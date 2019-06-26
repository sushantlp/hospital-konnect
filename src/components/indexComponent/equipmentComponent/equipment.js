import React from "react";
import Slider from "react-slick";
import _ from "lodash";
import { Card, Container, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../../../static/css/root.css";
import "./equipment.css";

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
        top: "160px",
        left: "-25px",
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

export default class Equipment extends React.Component {
  drawEquipment = (key, header, image, obj) => {
    return (
      <div
        className="equipment-card"
        key={key}
        onClick={() => this.props.tripToDetailView(obj, "equipment", 3)}
      >
        {/* <Link to="/equipment"> */}
        <Card>
          <div className="ui fluid image">
            <img src={image} alt={header} />
          </div>
        </Card>
        <span className="equip-header">{header}</span>
        {/* </Link> */}
      </div>
    );
  };

  loopEquipment = collection => {
    return collection.map((obj, key) => {
      return this.drawEquipment(obj.col_id, obj.partner, obj.img, obj);
    });
  };

  render() {
    if (this.props.homeDetail.status === "START") return <div />;
    else if (this.props.homeDetail.status === "FAIL") return <div />;

    const object = this.props.homeDetail.homeDetail.MEDI;

    if (_.isEmpty(object.col_list)) return <div />;

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
          <div className="ambulance-container">
            <h4 className="header-name">MEDICAL EQUIPMENT</h4>
            <div className="underscore" />
          </div>
          <Slider {...settings}>{this.loopEquipment(object.col_list)}</Slider>
        </div>
      </Container>
    );
  }
}
