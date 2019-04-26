import React from "react";
import Header from "../headerComponent/header";

import Spinner from "../spinnerComponent";
import "./category.css";

// import "bulma/css/bulma.css";

export default class Front extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getCategoryDetail();
  }

  nextPath = path => {
    this.props.history.replace(path);
  };

  render() {
    if (this.props.categoryDetail.status === "START") return <Spinner />;
    else if (this.props.categoryDetail.status === "FAIL") return <Spinner />;

    const object = this.props.categoryDetail.categoryDetail;

    return (
      <div class="overall">
        <Header />
        <div className="tileContainer">
          <div class="tile is-ancestor">
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article
                    class="tile is-child notification is-success nurse hover"
                    style={{
                      backgroundImage: `url(${object.NURS.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      cursor: "pointer"
                    }}
                    onClick={() => this.nextPath("/web")}
                  >
                    <h1 className="title-text"> {object.NURS.c_name}</h1>
                  </article>
                  <article
                    class="tile is-child notification is-warning aambulance hover"
                    style={{
                      backgroundImage: `url(${object.AAMB.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      cursor: "pointer"
                    }}
                    onClick={() => this.nextPath("/web")}
                  >
                    <h1 className="title-text">{object.AAMB.c_name} </h1>
                    <p>
                      <br /> <br /> <br />
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article
                    class="tile is-child notification is-danger ambulance hover"
                    style={{
                      backgroundImage: `url(${object.HOSP.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      cursor: "pointer"
                    }}
                    onClick={() => this.nextPath("/web")}
                  >
                    <h1 className="title-text"> {object.HOSP.c_name} </h1>
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
              <article
                class="tile is-child notification is-warning hover gambulance"
                style={{
                  backgroundImage: `url(${object.GAMB.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  cursor: "pointer"
                }}
                onClick={() => this.nextPath("/web")}
              >
                <h1 className="title-text"> {object.GAMB.c_name} </h1>
              </article>
              <article
                class="tile is-child notification is-warning equipment hover"
                style={{
                  backgroundImage: `url(${object.MEDI.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  cursor: "pointer"
                }}
                onClick={() => this.nextPath("/web")}
              >
                <h1 className="title-text"> {object.MEDI.c_name} </h1>
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
