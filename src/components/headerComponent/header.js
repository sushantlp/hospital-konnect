import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react/dist/commonjs";

import "./static/css/header.css";
import "../../static/css/root.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar-container-blue">
        <Menu
          style={{
            backgroundColor: "#263868"
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
      </div>
    );
  }
}
