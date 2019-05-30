import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ParentListComponent from "../components/parentListComponent";
import { getCategoryList } from "../actions/category-list-action";
import { getFilterList } from "../actions/filter-action";
import { getSideBar } from "../actions/side-bar-action";
import { postMobileRegister } from "../actions/mobile-register-action";
import { postOtpVerify } from "../actions/otp-verify-action";

function mapStateToProps(state) {
  return {
    categoryList: state.categoryList,
    filterList: state.filterList,
    sideBarList: state.sideBarList,
    mobileRegister: state.mobileRegister,
    otpVerify: state.otpVerify
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCategoryList: getCategoryList,
      getFilterList: getFilterList,
      getSideBar: getSideBar,
      postMobileRegister: postMobileRegister,
      postOtpVerify: postOtpVerify
    }
  )(ParentListComponent)
);
