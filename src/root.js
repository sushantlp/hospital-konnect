import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./static/css/root.css";

// import Category from "./containers/category-container";
import Landing from "./containers/index-container";
import CategoryList from "./containers/category-list-container";
import Feature from "./containers/feature-container";
import Profile from "./containers/profile-container";
import Faq from "./components/faqComponent";
import Privacy from "./components/privacyComponent";
import Term from "./components/termComponent";
import Appointment from "./containers/appointment-container";
import PackageBooking from "./components/packageBookingComponent";
import Address from "./components/addressComponent";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/terms/" component={Term} />
          <Route exact path="/privacy/" component={Privacy} />
          <Route exact path="/faq/" component={Faq} />
          <Route exact path="/profile/" component={Profile} />
          <Route exact path="/appointment/" component={Appointment} />
          <Route exact path="/package-booking/" component={PackageBooking} />
          <Route exact path="/address/" component={Address} />
          <Route exact path="/web/" component={Landing} />
          <Route exact path="/:city/:locality" component={Landing} />
          <Route
            exact
            path="/:city/:locality/:category"
            component={CategoryList}
          />
          <Route
            exact
            path="/:city/:locality/:category/:partner"
            component={Feature}
          />
          <Route component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
