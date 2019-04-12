import React from "react";

import ShowMore from "react-show-more";
// import { Grid } from "semantic-ui-react";

import "./static/css/hospital-overview.css";

export default class HospitalOverview extends React.Component {
  render() {
    return (
      <div>
        <h2 className="hospital-overview-title">
          <span>About People Tree Hospitals</span>
        </h2>

        <ShowMore lines={3} more="[more]" less="[shrink]" anchorClass="">
          PEOPLE TREE Hospitals, the dream initiative of this group of highly
          qualified and experienced doctors, having been trained in some of the
          hospitals across the world, today is a reality. Here we believe that
          quality care should become every citizen‘s birth right. We are on a
          mission to provide each and every one who enters our hospital, the
          same quality of care that we would want for ourselves, our children,
          our parents, family, and friends. We hope to transform healthcare in
          the country through innovation, compassion and unparalleled service.
          And all this, by just putting People First. At PEOPLE TREE Hospitals,
          all our patients will receive ethical, safe, compassionate and
          evidence-based medical care. In addition, we promise to maintain
          complete cost transparency and information transparency regarding
          their health condition.We hope this will help us regain PEOPLE'S
          Trust. We have set our vision to touch, move and inspire a billion
          people. It would be impossible to achieve this unless we make
          healthcare accessible and affordable to one and all.To sustain this
          audacious vision we created PEOPLE TREE Foundation; the charitable
          wing of PEOPLE TREE hospitals. Foundation will work towards providing
          quality healthcare free of cost to poor & needy patients.
        </ShowMore>
{/*
        <div className="hospital-overview-grid">
          <Grid stackable>
            <Grid.Row columns={3}>
              <Grid.Column>
                <div>
                  <h5>
                    <span>Address</span>
                  </h5>

                  <span>
                    2, Tumkur Service Road, Goraguntepalya Landmark: Near BMTC
                    Bus Stop And Opposite Taj Vivanta Yeshwanthpur, Bangalore
                  </span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <h5>
                    <span>Timings</span>
                  </h5>
                  <p>
                    <span className="hospital-overview-timing">Mon - Sun</span>
                  </p>
                  <p>
                    <span>8:00 AM - 10:00 PM</span>
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <h5>
                    <span>Modes of Payment</span>
                  </h5>
                  <p>
                    <span>
                      Credit card | Debit card | Cash | Cheque | Online Payment
                      | Insurance
                    </span>
                  </p>
                  <p>
                    Number of{" "}
                    <span className="hospital-overview-bed">Beds - 200</span>
                  </p>

                  <p>
                    Number of{" "}
                    <span className="hospital-overview-ambulance">
                      Ambulances - 4
                    </span>
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
              <Grid.Column>
                <div>
                  <h5>
                    <span>Amenities</span>
                  </h5>

                  <span>
                    <ul className="amenities-ul">
                      <li className="amenities-li">Diagnostic Lab Service</li>
                      <li className="amenities-li">Emergency Service</li>
                      <li className="amenities-li">24X7 Pharmacy</li>
                      <li className="amenities-li">Cafeteria</li>
                      <li className="amenities-li">Bank/ATM</li>
                      <li className="amenities-li">Parking</li>
                      <li className="amenities-li">Internet/Wifi</li>
                      <li className="amenities-li">Prayer Room</li>
                      <li className="amenities-li">Laundry Room</li>
                    </ul>
                  </span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <h5>
                    <span>Awards</span>
                  </h5>

                  <span>
                    <ul className="amenities-ul">
                      <li>
                        India's Most Promising & Valuable Emerging Hospitals,
                        2014
                      </li>
                    </ul>
                  </span>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <h5>
                    <span>Contact</span>
                  </h5>

                  <span>
                    <ul className="amenities-ul">
                      <li className="amenities-li">+918049599999</li>
                      <li className="amenities-li">+918049599999</li>
                      <li className="amenities-li">+918049599999</li>
                    </ul>
                  </span>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
*/}
      </div>
    );
  }
}
