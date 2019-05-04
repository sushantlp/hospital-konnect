import React from "react";
import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react/dist/commonjs";
import "./header.css";
// import "../../static/css/root.css";

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
              <h2
                style={{
                  color: "white"
                }}
              >
                Hospital Konnect
                <span style={{ fontStyle: "italic" }}> - Just Konnect</span>
              </h2>
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    );
  }
}
