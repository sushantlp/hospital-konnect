import React from "react";
import { Segment, Image, Grid, Icon, Button, Divider } from "semantic-ui-react";
import "./static/css/hospital-detail-card.css";
export default class HospitalCard extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);    
  }

  render() {
    return (
      <div className="hdc_container" id="#">
        <Segment>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column>
                <div>
                  <Grid.Column>
                    <div>
                      <Image
                        floated="left"
                        size="tiny"
                        src="https://images1-fabric.practo.com/535a0fc2301e403ceecc1626fa5fdf0a82bc5c51ef2de.png/thumbnail"
                      />
                    </div>
                  </Grid.Column>     
                  <Grid.Column className="hoscard-details"> 
                  <h1 className="hospital-name">
                    <span>Pristine Hospital</span>
                  </h1>
                  <h2 className="hospital-address">
                    <span>West Of Chord Road, Bangalore</span>
                  </h2>
                  <h2 className="hospital-specialist">
                    <span>Multi-Speciality Hospital</span>
                    <span><br/>Open 24 Hours</span>
                  </h2>
                <div className="book-button">
                  <Button
                    style={{
                      backgroundColor: "#263868",
                      color: "white",
                      opacity: "1",
                      width: "15em",
                      height:"4em",
                      fontSize: "1em",
                      fontWeight: "500",
                      marginTop: "1.5em"
                    }}
                  >
                  <Icon name="book" />
                    Book Now
                  </Button>     

                <div className="call-button">
                  <Button
                    style={{
                      backgroundColor: "#ed3237",
                      color: "white",
                      opacity: "1",
                      fontSize: "0.8em",
                      fontWeight: "500",
                      marginTop: "1.9em"
                    }}
                  >
                  <Icon name="phone" />
                    Call: 999-999-9999
                  </Button><br/>
                  <Button
                    style={{
                      backgroundColor: "#51B94D",
                      color: "black",
                      opacity: "1",
                      fontSize: "0.8em",
                      fontWeight: "500",
                      marginTop:"0.5em"
                    }}
                  > <Icon name="rupee" /> Registration Charges 500/-
                  </Button>
                </div>                             
                </div>
                  </Grid.Column>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {
          /* <Divider />

          <div>
            <div className="phone-number-text-div">
              <span className="phone-number-text">Phone number</span>
            </div>
            <div className="phone-number-div">
              <p className="phone-number-p">080 7196 6843</p>
            </div>
          </div> */
        }
        </Segment>
      </div>
    );
  }
}
