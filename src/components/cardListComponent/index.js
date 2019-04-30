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
    address,
    category,
    obj
  ) => {
    return (
      <div key={key}>
        <div class="card">
          <div className="card-list">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-128x128">
                    <img src={logo} alt={name + type + address} />
                  </figure>
                </div>
                <div class="content">
                  <p class="title is-4">{name}</p>
                  <p class="subtitle is-6">{type}</p>
                  <p class="subtitle is-6" style={{ marginBottom: "0.5em" }}>
                    {locality}
                  </p>
                  {category === 1 ? (
                    <p class="subtitle is-6" style={{ marginBottom: "0.5em" }}>
                      {working}
                    </p>
                  ) : null}

                  {category === 1 ? (
                    <p class="subtitle is-6">
                      Registration Charges
                      <span className="fees">
                        <del>&#x20b9;</del>
                        {registration}
                      </span>
                    </p>
                  ) : null}
                </div>
              </div>

              <div class="content">{address}</div>

              <footer class="card-footer">
                <a class="card-footer-item">{emergency}</a>

                <a
                  class="card-footer-item"
                  onClick={() => this.onClickCardList(obj)}
                >
                  View Profile
                </a>
              </footer>
            </div>
          </div>
        </div>
        <hr className="spacer is-1" />
      </div>
    );
  };

  loopCardList = collection => {
    return collection.map((obj, key) => {
      let logo = obj.p_logo;
      if (logo === null)
        logo =
          "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_128,w_128/v1555933889/ballyhoo/BALLYHOO_WEBSITE/profile-1.jpg";
      return this.drawCardList(
        key,
        obj.p_name,
        obj.p_type,
        logo,
        obj.p_locality,
        obj.p_working,
        obj.p_emergency_contact,
        obj.p_reg_charge,
        obj.p_address,
        obj.p_cat,
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
