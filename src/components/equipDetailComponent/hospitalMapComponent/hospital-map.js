import React from "react";
import _ from "lodash";

import { Segment } from "semantic-ui-react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import "./static/css/hospital-map.css";

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
      process.env.REACT_APP_GOOGLE_MAP_KEY
    }`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 12.9716, lng: 77.5946 }}>
    <Marker position={{ lat: 12.9716, lng: 77.5946 }} />
  </GoogleMap>
));

const enhance = _.identity;

// console.log(process.env.REACT_APP_GOOGLE_MAP_KEY);

const ReactGoogleMaps = () => [
  <div key={1}>
    <h2 className="hospital-map-header">
      <span>Where?</span>
    </h2>

    <span className="hospital-map-address">
      2, Tumkur Service Road, Goraguntepalya Landmark: Near BMTC Bus Stop And
      Opposite Taj Vivanta Yeshwanthpur, Bangalore
    </span>
  </div>,
  <Segment key={2}>
    <MyMapComponent key="map" />
  </Segment>
];

export default enhance(ReactGoogleMaps);
