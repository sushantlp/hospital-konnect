import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  Grid,
  Image,
  List,
  Icon,
  Segment
} from "semantic-ui-react/dist/commonjs";

import "semantic-ui-css/semantic.min.css";
import "./static/css/footer.css";
import AppStore from "./static/img/appstore_badge_en.svg";
import GooglePlay from "./static/img/googleplay_badge_en.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <Divider/>
          <div className='columns'>
          <div className='column'>
            <List className='list right' horizontal link relaxed>
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
            </List>
          </div>
          <div className='column'>
            <List horizontal link>
              <List.Item
                as="a"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i class="red facebook large icon"></i>
              </List.Item>
              <List.Item
                as="a"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i class="red instagram large icon"></i>
              </List.Item>
              <List.Item
                as="a"
                href="https://twitter.com/"
                target="_blank"
              >
                <i class="red twitter large icon"></i>
              </List.Item>
            </List>
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
