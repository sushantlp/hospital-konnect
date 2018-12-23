import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react/dist/commonjs";

import Sticky from "react-stickynode";

import "semantic-ui-css/semantic.min.css";
import "./static/css/header.css";
import "../../static/css/root.css";

let lastScrollY = 0;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorChange: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (lastScrollY >= 500) {
      this.setState({
        colorChange: true
      });
    } else if (lastScrollY <= 500) {
      this.setState({
        colorChange: false
      });
    }
  };

  render() {
    return (
      <Sticky
        enabled={true}
        top={0}
        bottomBoundary={".footer-container"}
        innerZ={2}
      >
        <div
          className={
            this.state.colorChange
              ? "navbar-container-blue"
              : "navbar-container-white"
          }
          ref={this.nav}
        >
          {/* <form action="javascript:void(0)" autoComplete={"off"}> */}
          <Menu
            style={{
              backgroundColor: this.state.colorChange ? "#263868" : "white"
            }}
          >
            <Link to={"/"}>
              <Menu.Item>
                <h1
                  style={{
                    color: "#ed3237"
                  }}
                >
                  HK
                </h1>
              </Menu.Item>
            </Link>
          </Menu>
          {/* </form> */}
        </div>
      </Sticky>
    );
  }
}
