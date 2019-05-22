import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ParentDetail from "../components/parentDetailComponent";

import { getCategoryFeature } from "../actions/category-feature-action";
import { getSeoUrl } from "../actions/seo-url-action";
import { postMobileRegister } from "../actions/mobile-register-action";
import { postOtpVerify } from "../actions/otp-verify-action";

function mapStateToProps(state) {
  return {
    categoryFeature: state.categoryFeature,
    seoUrlList: state.seoUrlList,
    mobileRegister: state.mobileRegister,
    otpVerify: state.otpVerify
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCategoryFeature: getCategoryFeature,
      getSeoUrl: getSeoUrl,
      postMobileRegister: postMobileRegister,
      postOtpVerify: postOtpVerify
    }
  )(ParentDetail)
);
