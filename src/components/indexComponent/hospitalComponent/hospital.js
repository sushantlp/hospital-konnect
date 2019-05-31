import React from "react";
import { Link, withRouter } from "react-router-dom";
import _ from "lodash";

import { Container } from "semantic-ui-react";
import "./hospital.css";

export default class Hospital extends React.Component {
  render() {
    if (this.props.homeDetail.status === "START") return <div />;
    else if (this.props.homeDetail.status === "FAIL") return <div />;

    const object = this.props.homeDetail.homeDetail.HOSP;

    if (_.isEmpty(object.col_list)) return <div />;

    return (
      <Container
        style={{
          width: "89em"
        }}
      >
        <div className="hospital-container">
          <h4 className="header-name">HOSPITALS</h4>
          <div className="underscore" />
          <br />
          <div className="tile is-ancestor is-vertical">
            <div className="tile is-parent">
              {/* <Link to="/detail"> */}
              <div
                className="hos5 tile"
                style={{
                  backgroundImage: `url(${object.col_list[4].img})`,
                  cursor: "pointer"
                }}
                onClick={() =>
                  this.props.tripToDetailView(object.col_list[4], "hospital", 1)
                }
              >
                <div className="hostext">
                  <span className="hospital-header">
                    {object.col_list[4].partner}
                  </span>
                  <span className="hospital-subheader">
                    {object.col_list[4].locality}
                  </span>
                </div>
              </div>
              {/* </Link> */}
              {/* <Link to="/detail"> */}
              <div
                className="hos4 tile"
                style={{
                  backgroundImage: `url(${object.col_list[3].img})`,
                  cursor: "pointer"
                }}
                onClick={() =>
                  this.props.tripToDetailView(object.col_list[3], "hospital", 1)
                }
              >
                <div className="hostext">
                  <span className="hospital-header">
                    {object.col_list[3].partner}
                  </span>
                  <span className="hospital-subheader">
                    {object.col_list[3].locality}
                  </span>
                </div>
              </div>
              {/* </Link> */}
            </div>
            <div className="tile is-parent">
              {/* <Link to="/detail"> */}
              <div
                className="hos1 tile"
                style={{
                  backgroundImage: `url(${object.col_list[0].img})`,
                  cursor: "pointer"
                }}
                onClick={() =>
                  this.props.tripToDetailView(object.col_list[0], "hospital", 1)
                }
              >
                <div className="hostext">
                  <span className="hospital-header">
                    {object.col_list[0].partner}
                  </span>
                  <span className="hospital-subheader">
                    {object.col_list[0].locality}
                  </span>
                </div>
              </div>
              {/* </Link>
              <Link to="/detail"> */}
              <div
                className="hos3 tile"
                style={{
                  backgroundImage: `url(${object.col_list[2].img})`,
                  cursor: "pointer"
                }}
                onClick={() =>
                  this.props.tripToDetailView(object.col_list[2], "hospital", 1)
                }
              >
                <div className="hostext">
                  <span className="hospital-header">
                    {object.col_list[2].partner}
                  </span>
                  <span className="hospital-subheader">
                    {object.col_list[2].locality}
                  </span>
                </div>
              </div>
              {/* </Link>
              <Link to="/detail"> */}
              <div
                className="hos2 tile"
                style={{
                  backgroundImage: `url(${object.col_list[1].img})`,
                  cursor: "pointer"
                }}
                onClick={() =>
                  this.props.tripToDetailView(object.col_list[1], "hospital", 1)
                }
              >
                <div className="hostext">
                  <span className="hospital-header">
                    {object.col_list[1].partner}
                  </span>
                  <span className="hospital-subheader">
                    {object.col_list[1].locality}
                  </span>
                </div>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

// export default withRouter(Hospital);
