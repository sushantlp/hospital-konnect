import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ParentDetail from "../components/parentDetailComponent";

import { getCategoryFeature } from "../actions/category-feature-action";
import { getSeoUrl } from "../actions/seo-url-action";

function mapStateToProps(state) {
  return {
    categoryFeature: state.categoryFeature,
    seoUrlList: state.seoUrlList
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCategoryFeature: getCategoryFeature,
      getSeoUrl: getSeoUrl
    }
  )(ParentDetail)
);
