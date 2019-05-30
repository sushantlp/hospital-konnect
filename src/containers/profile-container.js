import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ProfileFillComponent from "../components/profileFillComponent";

import { writeProfileDetail } from "../actions/write-profile-action";
import { readProfileDetail } from "../actions/read-profile-action";

function mapStateToProps(state) {
  return {
    readProfile: state.readProfile,
    writeProfile: state.writeProfile
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      writeProfileDetail: writeProfileDetail,
      readProfileDetail: readProfileDetail
    }
  )(ProfileFillComponent)
);
