import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ParentListComponent from "../components/parentListComponent";
import { getCategoryList } from "../actions/category-list-action";

function mapStateToProps(state) {
  return {
    categoryList: state.categoryList
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCategoryList: getCategoryList
    }
  )(ParentListComponent)
);
