import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import IndexComponent from "../components/indexComponent";
import { getCityLocality } from "../actions/city-locality-action";
import { getHomeDetail } from "../actions/home-action";
import { getWallImage } from "../actions/wall-action";

function mapStateToProps(state) {
  return {
    cityLocality: state.cityLocality,
    homeDetail: state.homeDetail,
    wallImage: state.wallImage
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCityLocality: getCityLocality,
      getHomeDetail: getHomeDetail,
      getWallImage: getWallImage
    }
  )(IndexComponent)
);
