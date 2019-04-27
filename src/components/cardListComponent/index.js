import React from "react";
import _ from "lodash";
import Spinner from "../spinnerComponent";
import "./card-list.css";

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      firstTime: true
    };
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
                  <p class="subtitle is-6" style={{ marginBottom: "0.5em" }}>
                    {working}
                  </p>

                  <p class="subtitle is-6">
                    Registration Charges
                    <span className="fees">
                      <del>&#x20b9;</del>
                      {registration}
                    </span>
                  </p>
                </div>
              </div>

              <div class="content">{address}</div>

              <footer class="card-footer">
                <a href="#" class="card-footer-item">
                  {emergency}
                </a>

                <a href="#" class="card-footer-item">
                  View profile
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
        obj
      );
    });
  };

  render() {
    if (this.props.hospitalList.status === "START") return <Spinner />;
    else if (this.props.hospitalList.status === "FAIL") return <Spinner />;

    if (this.state.firstTime)
      if (_.isEmpty(this.props.hospitalList.categoryList))
        return window.history.goBack();

    return (
      <div>
        <div class="panel-block">
          <div class="container">
            {this.loopCardList(this.props.hospitalList.categoryList)}
          </div>
        </div>
        <hr className="spacer is-3" />
        <div class="has-text-centered">
          {this.state.isLoading ? (
            <a class="button is-danger is-loading is-large">Load More</a>
          ) : (
            <a class="button is-danger is-large">Load More</a>
          )}
        </div>
      </div>
    );
  }
}
