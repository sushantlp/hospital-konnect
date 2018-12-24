import React from "react";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";
import { Animated } from "react-animated-css";

import "./static/css/animation.css";

export default class Animation extends React.Component {
  render() {
    return (
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // padding: "0",
          // margin: "0",
          height: "50em",
          width: "100%"
        }}
      >
        <Grid columns="equal">
          <Grid.Row style={{ marginLeft: "-1em" }}>
            <Grid.Column>
              <Animated
                animationIn="bounceInLeft"
                animationOut="pulse"
                isVisible={true}
              >
                <div
                  className="box"
                  style={{ backgroundColor: "rgba(253, 187, 127, 1)" }}
                >
                  <span className="Span">Left-Hover</span>
                </div>
              </Animated>

              <Animated
                animationIn="bounceInLeft"
                animationOut="pulse"
                isVisible={true}
              >
                <div className="box" style={{ backgroundColor: "#EC6E98" }}>
                  <span className="Span">Left-Hover</span>
                </div>
              </Animated>

              <Animated
                animationIn="bounceInLeft"
                animationOut="pulse"
                isVisible={true}
              >
                <div className="box" style={{ backgroundColor: "#87cdab" }}>
                  <span className="Span">Left-Hover</span>
                </div>
              </Animated>
            </Grid.Column>

            <Grid.Column />
            <Grid.Column />

            <Grid.Column>
              <Animated
                animationIn="zoomIn"
                animationOut="pulse"
                isVisible={true}
              >
                <div className="circle" style={{ backgroundColor: "white" }} />
              </Animated>

              <Animated
                animationIn="zoomIn"
                animationOut="pulse"
                isVisible={true}
              >
                <div
                  className="circle"
                  style={{ backgroundColor: "#C4EEF5" }}
                />
              </Animated>
              <Animated
                animationIn="zoomIn"
                animationOut="pulse"
                isVisible={true}
              >
                <div className="circle" style={{ backgroundColor: "white" }} />
              </Animated>
            </Grid.Column>

            <Grid.Column />
            <Grid.Column />

            <Grid.Column>
              <Animated
                animationIn="bounceInRight"
                animationOut="pulse"
                isVisible={true}
              >
                <div className="box" style={{ backgroundColor: "#9db4d6" }}>
                  <span className="Span">Right-Hover</span>
                </div>
              </Animated>
              <Animated
                animationIn="bounceInRight"
                animationOut="pulse"
                isVisible={true}
              >
                <div className="box" style={{ backgroundColor: "#a585bd" }}>
                  <span className="Span">Right-Hover</span>
                </div>
              </Animated>
              <Animated
                animationIn="bounceInRight"
                animationOut="pulse"
                isVisible={true}
              >
                <div className="box" style={{ backgroundColor: "#e48a84" }}>
                  <span className="Span">Right-Hover</span>
                </div>
              </Animated>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
