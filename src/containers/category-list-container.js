import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ParentListComponent from "../components/parentListComponent";
import { getCategoryList } from "../actions/category-list-action";
import { getFilterList } from "../actions/filter-action";
import { getSideBar } from "../actions/side-bar-action";

function mapStateToProps(state) {
  return {
    categoryList: state.categoryList,
    filterList: state.filterList,
    sideBarList: state.sideBarList
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCategoryList: getCategoryList,
      getFilterList: getFilterList,
      getSideBar: getSideBar
    }
  )(ParentListComponent)
);
