import React from "react";
import Header from "../headerComponent/header";
import "./animation.css";
// import "bulma/css/bulma.css";

export default class Animation extends React.Component {
  nextPath = path => {
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="overall">
        <Header />
        <div
          className="tileContainer"
          onClick={() => this.nextPath("/initial")}
        >
          <div class="tile is-ancestor">
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article
                    class="tile is-child notification is-success nurse hover"
                    style={{
                      backgroundImage:
                        "url(https://res.cloudinary.com/dp67gawk6/image/upload/v1556007005/ballyhoo/BALLYHOO_WEBSITE/nursing.jpg)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  >
                    <h1 className="title-text"> Nursing Care </h1>
                  </article>
                  <article class="tile is-child notification is-warning aambulance hover">
                    <h1 className="title-text"> Air Ambulance </h1>
                    <p>
                      <br /> <br /> <br />
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-danger ambulance hover">
                    <h1 className="title-text"> Hospitals </h1>
                    <p>
                      <span className="adjustment">
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                      </span>
                    </p>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-warning hover gambulance">
                <h1 className="title-text"> Ground Ambulance </h1>
              </article>
              <article class="tile is-child notification is-warning equipment hover">
                <h1 className="title-text"> Medical Equipment </h1>
                <p className="mark">
                  <br /> <br /> <br /> <br /> <br /> <br /> <br />
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
