import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import IndexComponent from "../components/indexComponent";
import { getCityLocality } from "../actions/city-locality-action";
import { getHomeDetail } from "../actions/home-action";

function mapStateToProps(state) {
  return {
    cityLocality: state.cityLocality,
    homeDetail: state.homeDetail
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCityLocality: getCityLocality,
      getHomeDetail: getHomeDetail
    }
  )(IndexComponent)
);
