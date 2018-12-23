import React from "react";

import {
  Segment,
  Divider,
  Checkbox,
  Radio
} from "semantic-ui-react/dist/commonjs";
import Slider, { Range } from "rc-slider";

import "rc-slider/assets/index.css";
import "./static/css/hospitalFilter.css";

export default class HospitalFilter extends React.Component {
  render() {
    return (
      <Segment>
        <div>
          <h3>Filters</h3>
        </div>
        <Divider />
        <div>
          <h4 className="price">Price</h4>
          <Range defaultValue={[0, 100]} min={0} max={100} />
          <br />
        </div>
        <Divider />
        <div>
          <h4 className="amenitie">Amenities</h4>
          <Checkbox label="Has Parking" className="amenitie-checkbox" />

          <Checkbox
            label="Diagnostic Lab Services"
            className="amenitie-checkbox"
          />

          <Checkbox label="24x7 Pharmacy" className="amenitie-checkbox" />
          <br />
          <Checkbox label="Cafeteria" className="amenitie-checkbox" />
        </div>
        <Divider />

        <div>
          <h4 className="open">Open</h4>
          <Checkbox label="Open 24X7" className="open-checkbox" />
        </div>
        <Divider />

        <div>
          <h4 className="sort-by">Sort By</h4>
          <Radio
            className="sort-by-radio"
            label="Relevance"
            name="radioGroup"
            value="Relevance"
            // checked={this.state.userGender === "male"}
            // onChange={this.genderHandleChange}
          />
          <br />
          <Radio
            className="sort-by-radio"
            label="Price-Low to High"
            name="radioGroup"
            value="Price- Low to High"
            // checked={this.state.userGender === "female"}
            // onChange={this.genderHandleChange}
          />
          <br />
          <Radio
            className="sort-by-radio"
            label="Price- High to Low"
            name="radioGroup"
            value="Price- High to Low"
            // checked={this.state.userGender === "female"}
            // onChange={this.genderHandleChange}
          />
          <br />
          <Radio
            className="sort-by-radio"
            label="Recommendation"
            name="radioGroup"
            value="Recommendation"
            // checked={this.state.userGender === "female"}
            // onChange={this.genderHandleChange}
          />
        </div>
      </Segment>
    );
  }
}
