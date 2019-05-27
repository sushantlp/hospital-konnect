import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import PackageBookingComponent from "../components/packageBookingComponent";
import { postOfflineBed } from "../actions/offline-bed-action";
import { postOnlineBed } from "../actions/online-bed-action";

function mapStateToProps(state) {
  return {
    onlineBed: state.onlineBed,
    offlineBed: state.offlineBed
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      postOfflineBed: postOfflineBed,
      postOnlineBed: postOnlineBed
    }
  )(PackageBookingComponent)
);
