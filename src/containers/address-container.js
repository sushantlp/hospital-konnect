import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ParentAddressComponent from "../components/parentAddressComponent";
import { getambulanceDistance } from "../actions/ambulance-distance-action";

function mapStateToProps(state) {
  return {
    ambulanceDistance: state.ambulanceDistance
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getambulanceDistance: getambulanceDistance
    }
  )(ParentAddressComponent)
);
