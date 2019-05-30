import React from "react";
import Slider from "react-slick";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Card, Container, Icon } from "semantic-ui-react";

import "./nursing.css";

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
  drawNursing = (key, header, image, obj) => {
    return (
      <div
        className="nursing-header"
        key={key}
        onClick={() => this.props.tripToDetailView(obj, "nursing", 4)}
      >
        <Card>
          <div className="ui fluid image">
            <img src={image} alt={header} />
          </div>
        </Card>
        <span className="nursing-header">{header}</span>
      </div>
    );
  };

  loopNursing = collection => {
    return collection.map((obj, key) => {
      return this.drawNursing(obj.col_id, obj.partner, obj.img, obj);
    });
  };

  render() {
    if (this.props.homeDetail.status === "START") return <div />;
    else if (this.props.homeDetail.status === "FAIL") return <div />;

    const object = this.props.homeDetail.homeDetail.NURS;

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
          <div className="nursing-container">
            <h4 className="header-name">NURSING CARE</h4>
            <div className="underscore" />
          </div>
          <Slider {...settings}>{this.loopNursing(object.col_list)}</Slider>
        </div>
      </Container>
    );
  }
}
