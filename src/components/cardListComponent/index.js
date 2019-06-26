import React from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import AuthModal from "../authModalComponent";
import Lightbox from "lightbox-react";
import Spinner from "../spinnerComponent";
import { Icon } from "semantic-ui-react/dist/commonjs";
import "lightbox-react/style.css";
import "./card-list.css";

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      authOpen: false,
      photoIndex: 0,
      lightBox: false,
      bundleImage: [],
      // partnerId: 0
      selectedList: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryList !== nextProps.categoryList) {
      this.updateisLoadingState(false);
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  intializeImageArray = imageArray => {
    this.setState({ lightBox: true, bundleImage: imageArray });
  };

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
    image,
    buttonText,
    imageArray,
    obj
  ) => {
    return (
      <div className="box-card-list" key={key}>
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-200x200">
                <img
                  src={logo}
                  alt={name + " " + type + " " + working + " " + locality}
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p class="title is-4">{name}</p>
                <p class="subtitle is-6" style={{ color: "black" }}>
                  {type}
                </p>

                {category === 1 ? (
                  doc === 0 ? null : (
                    <p className="doctor">{doc} Doctors</p>
                  )
                ) : null}

                {image.length === 0 ? null : (
                  <div className="hospital-image">
                    {image.map((obj, key) => {
                      return (
                        <span
                          key={key}
                          onClick={() => this.intializeImageArray(imageArray)}
                        >
                          <img
                            src={obj.thumb}
                            alt={
                              name + " " + type + " " + working + " " + locality
                            }
                          />
                        </span>
                      );
                    })}
                  </div>
                )}

                {category === 1 ? (
                  <div style={{ marginTop: "0.5em" }}>
                    {speciality.map((obj, key) => {
                      return (
                        <span
                          class="tag"
                          style={{ fontWeight: "400" }}
                          key={obj.spl_id}
                        >
                          {obj.spl_name}
                        </span>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="right-box">
              <div className="rating-container">
                <span className="rating-number">{rating}</span>
                {full.map(function(i) {
                  return (
                    // <Icon
                    //   key={i}
                    //   name="star"
                    // style={{
                    //   color: "#23d160",
                    //   fontSize: "14px",
                    //   marginLeft: "3px",
                    //   marginRight: "3px"
                    // }}
                    // />
                    <img src="https://img.icons8.com/color/17/000000/filled-star.png" />
                  );
                })}
                <span>{half}</span>
                <span>
                  {empty.map(function(i) {
                    return (
                      // <Icon
                      //   key={i}
                      //   name="star outline"
                      //   style={{
                      //     color: "#23d160",
                      //     fontSize: "14px",
                      //     marginLeft: "3px",
                      //     marginRight: "3px"
                      //   }}
                      // />

                      <img src="https://img.icons8.com/color/17/000000/star.png" />
                    );
                  })}
                </span>
              </div>

              <div className="location-price-open">
                {category === 1 ? (
                  working === null ? null : (
                    <p>
                      <img src="https://img.icons8.com/ultraviolet/12/000000/timer.png" />
                      <span style={{ fontWeight: "bold" }}>{working}</span>
                    </p>
                  )
                ) : null}

                <p>
                  <img src="https://img.icons8.com/ultraviolet/12/000000/marker.png" />
                  <span>{locality}</span>
                </p>

                {category === 1 ? (
                  <p>
                    <img src="https://img.icons8.com/ultraviolet/12/000000/cash-in-hand.png" />
                    <span style={{ fontWeight: "bold" }}>
                      <del>&#x20b9;</del>
                      {registration}
                    </span>
                  </p>
                ) : null}

                {category === 1 ? (
                  <div>
                    <img src="https://img.icons8.com/nolan/12/000000/waypoint-map.png" />
                    <span>{obj.p_distance} km</span>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
          <footer class="card-footer">
            {category === 1 ? (
              <div class="card-footer-item">
                <a class="button is-medium">
                  <span class="icon">
                    <img src="https://img.icons8.com/office/23/000000/hospital.png" />
                  </span>
                  <span>7898130226</span>
                </a>
              </div>
            ) : null}

            <div class="card-footer-item">
              <a
                class="button is-medium"
                onClick={() => this.onClickCardList(obj, true)}
              >
                <span class="icon">
                  <img src="https://img.icons8.com/cotton/25/000000/calendar.png" />
                </span>
                <span>{buttonText}</span>
              </a>
            </div>

            <div class="card-footer-item">
              <a
                class="button is-medium"
                onClick={() => this.onClickCardList(obj, false)}
              >
                <span class="icon">
                  <img src="https://img.icons8.com/plasticine/30/000000/visible.png" />
                </span>
                <span>View Detail</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  };

  loopCardList = collection => {
    return collection.map((obj, key) => {
      let logo = obj.p_image_thumb;

      let speciality = [];
      let fullRating = [];
      let emptyRating = [];
      let topRating = 5;
      let half = undefined;
      let buttonText = "Book Appointment";

      let imageArray = obj.p_images.map(image => {
        return image.original;
      });

      if (obj.p_cat === 2) buttonText = "Book Ambulance";
      else if (obj.p_cat === 3) buttonText = "Book Equipment";
      else if (obj.p_cat === 3) buttonText = "Book Nursing";

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
            // <Icon
            //   key={1}
            //   name="star half"
            //   style={{
            //     color: "#23d160",
            //     fontSize: "14px",
            //     marginLeft: "3px",
            //     marginRight: "3px"
            //   }}
            // />
            <img src="https://img.icons8.com/color/17/000000/star-half-empty.png" />
          );
        }
      } else topRating = topRating - Number(ratingSplit[0]);

      // Full Star
      for (let i = 0; i < Number(ratingSplit[0]); i++) {
        fullRating.push(i);
      }

      // Empty Star
      for (let i = 0; i < topRating; i++) {
        emptyRating.push(i);
      }

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
        fullRating,
        half,
        emptyRating,
        obj.p_rating,
        obj.p_images,
        buttonText,
        imageArray,
        obj
      );
    });
  };

  onLoadMoreList = nextPage => {
    this.updateisLoadingState(true);
    this.props.loadMoreDataApiCall(nextPage);
  };

  updateisLoadingState = bool => {
    this.setState({
      isLoading: bool
    });
  };

  updateOpenState = bool => {
    this.setState({
      authOpen: bool
    });
  };

  updateSelectedList = list => {
    this.setState({
      selectedList: list
    });
  };

  onClickCardList = (object, flag) => {
    let categoryName = "";
    if (object.p_cat === 1 && flag) {
      const authStatus = sessionStorage.getItem("AUTH_STATUS");
      let authData = sessionStorage.getItem("AUTH_DATA");
      authData = JSON.parse(authData);
      if (authStatus !== null || authStatus) {
        const data = {
          type: "APPOINTMENT",
          customer_id: authData.customer_id,
          role: authData.role
        };

        sessionStorage.setItem("AUTH_DATA", JSON.stringify(data));
        sessionStorage.setItem("ALL_DATA", JSON.stringify(object));
        sessionStorage.setItem("PACKAGE_DATA", JSON.stringify({}));
        this.props.parentProps.history.push("/appointment/");
      }

      this.updateOpenState(true);
      this.updateSelectedList(object);
    } else {
      if (object.p_cat === 1) categoryName = "hospital";
      else if (object.p_cat === 2) categoryName = "ambulance";
      else if (object.p_cat === 3) categoryName = "equipment";
      else categoryName = "nursing";

      const partnerUrl = object.p_name.replace(/ /g, "-").toLowerCase();

      // Url Change
      this.props.parentProps.history.push({
        pathname: `/${this.props.parentProps.match.params.city}/${
          this.props.parentProps.match.params.locality
        }/${categoryName}/${partnerUrl}`,
        search: `?partner=${object.p_id}&category=${object.p_cat}&flag=${flag}`,
        state: { data: object }
      });
    }
  };

  render() {
    if (this.props.categoryList.status === "START") return <Spinner />;
    else if (this.props.categoryList.status === "FAIL") return <Spinner />;

    if (this.props.parentState.page === 1)
      if (_.isEmpty(this.props.categoryList.categoryList)) {
        return <Redirect to="/web/" />;
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

        {this.state.authOpen ? (
          <AuthModal
            mobileText="Enter your phone number (required)"
            otpText="Enter your OTP (required)"
            postMobileRegister={this.props.postMobileRegister}
            mobileRegister={this.props.mobileRegister}
            postOtpVerify={this.props.postOtpVerify}
            otpVerify={this.props.otpVerify}
            history={this.props.parentProps.history}
            selectedData={this.state.selectedList}
            authOpen={this.state.authOpen}
            updateOpenState={this.updateOpenState}
            type="APPOINTMENT"
          />
        ) : null}

        {this.state.lightBox && (
          <Lightbox
            mainSrc={this.state.bundleImage[this.state.photoIndex]}
            nextSrc={
              this.state.bundleImage[
                (this.state.photoIndex + 1) % this.state.bundleImage.length
              ]
            }
            prevSrc={
              this.state.bundleImage[
                (this.state.photoIndex + this.state.bundleImage.length - 1) %
                  this.state.bundleImage.length
              ]
            }
            onCloseRequest={() => this.setState({ lightBox: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (this.state.photoIndex + this.state.bundleImage.length - 1) %
                  this.state.bundleImage.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex:
                  (this.state.photoIndex + 1) % this.state.bundleImage.length
              })
            }
          />
        )}
      </div>
    );
  }
}
