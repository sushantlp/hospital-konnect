import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ParentDetail from "../components/parentDetailComponent";

import { getCategoryFeature } from "../actions/category-feature-action";

function mapStateToProps(state) {
  return {
    categoryFeature: state.categoryFeature
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCategoryFeature: getCategoryFeature
    }
  )(ParentDetail)
);
