import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import IndexComponent from "../components/indexComponent";
import { getCityLocality } from "../actions/city-locality-action";

function mapStateToProps(state) {
  return {
    cityLocality: state.cityLocality
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCityLocality: getCityLocality
    }
  )(IndexComponent)
);
