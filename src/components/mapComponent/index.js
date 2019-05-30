import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

export default class Map extends React.Component {
  render() {
    const MyMapComponent = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBQRnONwuHy906feS53jF2jvDahM7TNw1k&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px`, width: "auto" }} />,
        mapElement: <div style={{ height: `100%` }} />
      }),
      withScriptjs,
      withGoogleMap
    )(props => (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
      >
        <Marker
          position={{ lat: this.props.latitude, lng: this.props.longitude }}
        />
      </GoogleMap>
    ));

    return <MyMapComponent />;
  }
}
