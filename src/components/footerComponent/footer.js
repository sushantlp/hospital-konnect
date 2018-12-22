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

import AppStore from "./static/img/apple-store.png";
import GooglePlay from "./static/img/google-play.png";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <Segment
          style={{
            backgroundColor: "#263868"
          }}
        >
          <Divider />
          <Grid doubling floated="left" centered inverted stackable>
            <Grid.Row columns="equal">
              <Grid.Column floated="left">
                <List horizontal link inverted relaxed>
                  <List.Item>
                    <Link to="/terms">Terms of Service </Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/privacy">Privacy Policy</Link>
                  </List.Item>

                  <List.Item>
                    <Link to="/faq">FAQ's</Link>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column floated="right" textAlign="right">
                <List horizontal link inverted>
                  <List.Item
                    as="a"
                    href="https://www.facebook.com/ballyhootoday/"
                    target="_blank"
                  >
                    <Icon inverted circular name="facebook" />
                  </List.Item>

                  <List.Item
                    as="a"
                    href="https://www.instagram.com/ballyhootoday/"
                    target="_blank"
                  >
                    <Icon inverted circular name="instagram" />
                  </List.Item>

                  <List.Item
                    as="a"
                    href="https://twitter.com/BallyhooToday"
                    target="_blank"
                  >
                    <Icon inverted circular name="twitter" />
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />

          <Grid doubling stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={6} />
              <Grid.Column>
                <List horizontal link inverted relaxed>
                  <List.Item
                    as="a"
                    target="_blank"
                    href="https://itunes.apple.com/in/app/ballyhoo-food-drinks-offers/id1138306421?mt=8"
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
                    href="https://play.google.com/store/apps/details?id=com.sense.today.ballyhoo"
                  >
                    <Image
                      centered
                      src={GooglePlay}
                      style={{ width: "120px", height: "auto" }}
                    />
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
