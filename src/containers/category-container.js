import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CategoryComponent from "../components/categoryComponent";
import { getCategoryDetail } from "../actions/category-action";

function mapStateToProps(state) {
  return {
    categoryDetail: state.categoryDetail
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCategoryDetail: getCategoryDetail
    }
  )(CategoryComponent)
);
