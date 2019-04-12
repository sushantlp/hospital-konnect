import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  Image,
  List
} from "semantic-ui-react/dist/commonjs";

import AppStore from "./static/img/appstore_badge_en.svg";
import GooglePlay from "./static/img/googleplay_badge_en.svg";

import "semantic-ui-css/semantic.min.css";
import "./static/css/footer.css";


export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <Divider/>
          <div className='columns'>
          <div className='column'>
            <List className='list' horizontal link relaxed>
              <List.Item >
                <Link to="/terms">
                <p className='flink'>Terms of Service</p>
                </Link>
              </List.Item>
              <List.Item>
                <Link to="/privacy">
                  <p className='flink'>Privacy Policy</p>
                </Link>
              </List.Item>
              <List.Item>
                <Link to="/faq">
                  <p className='flink'>FAQ's</p>
                </Link>
              </List.Item>
              <List.Item>
                <Link to="/faq">
                  <p className='flink'>About Us</p>
                </Link>
              </List.Item>
              <List.Item>
                <Link to="/faq">
                  <p className='flink'>Contact Us</p>
                </Link>
              </List.Item>
            </List>
          </div>
          <div className='column'>
          </div>
        </div>
        <Divider />
          <div className="center">
            <List horizontal link relaxed centered>
              <List.Item
                as="a"
                target="_blank"
                href=""
              >
                <Image
                  centered
                  src={AppStore}
                  style={{ width: "120px", height: "auto" }}
                />
              </List.Item>
              <List.Item
                as="a"
                target="_blank"
                href=""
              >
                <Image
                  centered
                  src={GooglePlay}
                  style={{ width: "140px", height: "auto" }}
                />
              </List.Item>
            </List>
          </div>
          </div>
    );
  }
}