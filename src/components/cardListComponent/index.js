import React from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import Spinner from "../spinnerComponent";

import "./card-list.css";

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryList !== nextProps.categoryList) {
      this.updateisLoadingState();
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  drawCardList = (
    key,
    name,
    type,
    logo,
    locality,
    working,
    emergency,
    registration,
    doc,
    category,
    speciality,
    full,
    half,
    empty,
    rating,
    obj
  ) => {
    return (
      <div className="box-card-list" key={key}>
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img
                  src={logo}
                  alt={name + " " + type + " " + working + " " + locality}
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="title is-4" style={{ fontWeight: "400" }}>
                  {name}
                </p>
                <p class="subtitle is-6">{type}</p>
                <p>{doc} Doctors</p>

                <div className="hospital-image">
                  <span>
                    <img
                      src="https://images1-fabric.practo.com/manipal-hospital-bangalore-1481708155-5851127b1ff31.jpg/36x36"
                      alt=""
                    />
                  </span>

                  <span>
                    <img
                      src="https://images1-fabric.practo.com/practices/630200/manipal-hospital-bangalore-5b90c08f86548.jpg/36x36"
                      alt=""
                    />
                  </span>

                  <span>
                    <img
                      src="https://images1-fabric.practo.com/practices/630200/manipal-hospital-bangalore-5b90c0871affc.jpg/36x36"
                      alt=""
                    />
                  </span>

                  <span>
                    <img
                      style={{ borderRadius: "5px" }}
                      src="https://images1-fabric.practo.com/practices/630200/manipal-hospital-bangalore-5b90c08f86548.jpg/36x36"
                      alt=""
                    />
                  </span>
                </div>

                <div style={{ marginTop: "0.5em" }}>
                  <span class="tag" style={{ fontWeight: "400" }}>
                    Cardiology
                  </span>
                  <span class="tag" style={{ fontWeight: "400" }}>
                    Urology
                  </span>
                  <span class="tag" style={{ fontWeight: "400" }}>
                    Dermatology
                  </span>
                  <span class="tag" style={{ fontWeight: "400" }}>
                    Cardiology
                  </span>
                  <span class="tag" style={{ fontWeight: "400" }}>
                    Urology
                  </span>
                  <span class="tag" style={{ fontWeight: "400" }}>
                    Dermatology
                  </span>
                  <span class="tag" style={{ fontWeight: "400" }}>
                    Dermatology
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  backgroundColor: "#f0f0f5",
                  padding: "3px 0 3px 3px",
                  marginRight: "3px",
                  borderRadius: "3px"
                }}
              >
                <span
                  style={{
                    color: "#23d160",
                    fontWeight: "700",
                    fontSize: "14px",
                    marginLeft: "3px",
                    marginRight: "3px"
                  }}
                >
                  {rating}
                </span>
                <span>
                  {full}
                  {half}
                  {empty}
                </span>
              </div>

              <div style={{ marginTop: "1em" }}>
                <p style={{ fontWeight: "300" }}>
                  <img src="https://img.icons8.com/ultraviolet/15/000000/timer.png" />
                  <span style={{ paddingLeft: "0.5em" }}>Open 24 x 7</span>
                </p>

                <p style={{ fontWeight: "300" }}>
                  <img src="https://img.icons8.com/ultraviolet/15/000000/marker.png" />
                  <span style={{ paddingLeft: "0.5em" }}>
                    Marathahalli, Bangalore
                  </span>
                </p>

                <p style={{ fontWeight: "300" }}>
                  <img src="https://img.icons8.com/ultraviolet/15/000000/cash-in-hand.png" />
                  <span style={{ paddingLeft: "0.5em" }}>
                    <del>&#x20b9;</del>
                    500
                  </span>
                </p>
              </div>
            </div>
          </article>
          <footer class="card-footer">
            <div class="card-footer-item">
              <a class="button is-medium">
                <span class="icon">
                  <img src="https://img.icons8.com/office/23/000000/hospital.png" />
                </span>
                <span>7898130226</span>
              </a>
            </div>

            <div class="card-footer-item">
              <a class="button is-medium">
                <span class="icon">
                  <img src="https://img.icons8.com/plasticine/30/000000/visible.png" />
                </span>
                <span>View Detail</span>
              </a>
            </div>

            <div class="card-footer-item">
              <a class="button is-info is-medium">
                <span class="icon">
                  <img src="https://img.icons8.com/cotton/25/000000/calendar.png" />
                </span>
                <span>Book Appointment</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
      // <div key={key}>
      //   <div class="card">
      //     <div className="card-list">
      //       <div class="card-content">
      //         <div class="media">
      //           <div class="media-left">
      //             <figure class="image is-128x128">
      //               <img src={logo} alt={name + type + address} />
      //             </figure>
      //           </div>
      //           <div class="content">
      //             <p class="title is-4">{name}</p>
      //             <p class="subtitle is-6">{type}</p>
      //             <p class="subtitle is-6" style={{ marginBottom: "0.5em" }}>
      //               {locality}
      //             </p>
      //             {category === 1 ? (
      //               <p class="subtitle is-6" style={{ marginBottom: "0.5em" }}>
      //                 {working}
      //               </p>
      //             ) : null}

      //             {category === 1 ? (
      //               <p class="subtitle is-6">
      //                 Registration Charges
      //                 <span className="fees">
      //                   <del>&#x20b9;</del>
      //                   {registration}
      //                 </span>
      //               </p>
      //             ) : null}
      //           </div>
      //         </div>

      //         <div class="content">{address}</div>

      //         <footer class="card-footer">
      //           <a class="card-footer-item">{emergency}</a>

      //           <a
      //             class="card-footer-item"
      //             onClick={() => this.onClickCardList(obj)}
      //           >
      //             View Profile
      //           </a>
      //         </footer>
      //       </div>
      //     </div>
      //   </div>
      //   <hr className="spacer is-1" />
      // </div>
    );
  };

  loopCardList = collection => {
    return collection.map((obj, key) => {
      let logo = obj.p_logo;
      let speciality = [];
      let fullRating = [];
      let emptyRating = [];
      let topRating = 5;
      let half = undefined;

      if (logo === null)
        logo =
          "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_128,w_128/v1555933889/ballyhoo/BALLYHOO_WEBSITE/profile-1.jpg";

      if (obj.p_cat === 1) speciality = obj.p_specialities;

      const rating = obj.p_rating + "";
      const ratingSplit = rating.split(".");

      // Half Star
      if (ratingSplit[1] !== undefined) {
        if (parseInt(ratingSplit[1], 10) === 0)
          topRating = topRating - Number(ratingSplit[0]);
        else {
          topRating = topRating - Number(ratingSplit[0]);
          topRating = topRating - 1;

          half = (
            <i
              class="fas fa-star-half-alt"
              style={{
                color: "#23d160",
                fontSize: "14px",
                marginLeft: "3px",
                marginRight: "3px"
              }}
            />
          );
        }
      } else topRating = topRating - Number(ratingSplit[0]);

      // Full Star
      for (let i = 0; i < Number(ratingSplit[0]); i++) {
        fullRating.push(i);
      }

      // Full Star
      let full = fullRating.map(function(i) {
        return (
          <i
            class="fas fa-star"
            style={{
              color: "#23d160",
              fontSize: "14px",
              marginLeft: "3px",
              marginRight: "3px"
            }}
          />
        );
      });

      // // Empty Star
      for (let i = 0; i < topRating; i++) {
        emptyRating.push(i);
      }

      // Empty Star
      let empty = emptyRating.map(function(i) {
        return (
          <i
            class="far fa-star"
            style={{
              color: "#23d160",
              fontSize: "14px",
              marginLeft: "3px",
              marginRight: "3px"
            }}
          />
        );
      });

      return this.drawCardList(
        key,
        obj.p_name,
        obj.p_type,
        logo,
        obj.p_locality,
        obj.p_working,
        obj.p_emergency_contact,
        obj.p_reg_charge,
        obj.p_doc_count,
        obj.p_cat,
        speciality,
        full,
        half,
        empty,
        obj.p_rating,
        obj
      );
    });
  };

  onLoadMoreList = nextPage => {
    this.updateisLoadingState();
    this.props.loadMoreDataApiCall(nextPage);
  };

  updateisLoadingState = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  };

  onClickCardList = object => {
    let categoryName = "";

    if (object.p_cat === 1) categoryName = "hospital";
    else if (object.p_cat === 2) categoryName = "ambulance";
    else if (object.p_cat === 3) categoryName = "equipment";
    else categoryName = "nursing";

    const partnerUrl = object.p_name.replace(/ /g, "-").toLowerCase();
    this.props.parentProps.history.push("/");

    // Url Change
    this.props.parentProps.history.push({
      pathname: `${this.props.parentProps.match.params.city}/${
        this.props.parentProps.match.params.locality
      }/${categoryName}/${partnerUrl}`,
      search: `?partner=${object.p_id}&category=${object.p_cat}`,
      state: { data: object }
    });
  };

  render() {
    if (this.props.categoryList.status === "START") return <Spinner />;
    else if (this.props.categoryList.status === "FAIL") return <Spinner />;

    if (this.props.parentState.page === 1)
      if (_.isEmpty(this.props.categoryList.categoryList)) {
        return <Redirect to="/web" />;
      }

    return (
      <div>
        <div
          class="panel-block"
          style={{
            borderTop: "0px",
            borderBottom: "0px",
            borderRight: "0px",
            borderLeft: "0px"
          }}
        >
          <div class="container">
            {this.loopCardList(this.props.categoryList.categoryList)}
          </div>
        </div>
        <hr className="spacer is-3" />
        <div class="has-text-centered">
          {this.props.categoryList.next_page !== null ? (
            this.state.isLoading ? (
              <a class="button is-danger is-loading is-large">Load More</a>
            ) : (
              <a
                class="button is-danger is-large"
                onClick={() =>
                  this.onLoadMoreList(this.props.categoryList.next_page)
                }
              >
                Load More
              </a>
            )
          ) : (
            <a
              class="button is-danger is-large"
              title="Disabled button"
              disabled
            >
              Load More
            </a>
          )}
        </div>
      </div>
    );
  }
}
