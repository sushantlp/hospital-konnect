import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./static/css/root.css";

import FrontPage from "./components/frontPageComponent/front-page";
import Animation from "./components/animationComponent/animation";
import Initial from "./components/indexComponent";
import Faq from "./components/faqComponent/faq";
import Privacy from "./components/privacyComponent/privacy";
import Term from "./components/termComponent/term";
import HospitalList from "./components/hospitalListComponent";
import HospitalDetail from "./components/hospitalDetailComponent";

// Router root
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/terms/" component={Term} />
          <Route exact path="/privacy/" component={Privacy} />
          <Route exact path="/faq/" component={Faq} />
          <Route exact path="/animation/" component={Animation} />
          <Route exact path="/initial/" component={Initial} />
          <Route exact path="/list/" component={HospitalList} />
          <Route exact path="/detail/" component={HospitalDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;