import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./static/css/root.css";

import Animation from "./components/animationComponent/animation";
import Initial from "./components/indexComponent";
import Faq from "./components/faqComponent/faq";
import Privacy from "./components/privacyComponent/privacy";
import Term from "./components/termComponent/term";
import HospitalList from "./components/hospitalListComponent";
import HospitalDetail from "./components/hospitalDetailComponent";
import AmbulanceDetail from "./components/ambulanceDetailComponent";
import NursingDetail from "./components/nursingDetailComponent";
import EquipDetail from "./components/equipDetailComponent";
import NursingList from "./components/nursingListComponent";
import AmbulanceList from "./components/ambulanceListComponent";
import EquipList from "./components/equipListComponent";
import AirAmbulanceDetail from "./components/airAmbulanceDetailComponent";

// Router root

import ScrollToTop from "./ScrollToTop";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Animation} />
          <Route exact path="/terms/" component={Term} />
          <Route exact path="/privacy/" component={Privacy} />
          <Route exact path="/faq/" component={Faq} />
          <Route exact path="/animation/" component={Animation} />
          <Route exact path="/initial/" component={Initial} />
          <Route exact path="/hospital-list/" component={HospitalList} />
          <Route exact path="/hospital/" component={HospitalDetail} />
          <Route exact path="/ambulance/" component={AmbulanceDetail} />
          <Route exact path="/airambulance/" component={AirAmbulanceDetail} />
          <Route exact path="/nursing/" component={NursingDetail} />
          <Route exact path="/equipment/" component={EquipDetail} />
          <Route exact path="/nursing-list/" component={NursingList} />
          <Route exact path="/equipment-list/" component={EquipList} />
          <Route exact path="/ambulance-list/" component={AmbulanceList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
