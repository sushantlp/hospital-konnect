import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./static/css/root.css";

import Category from "./containers/category-container";
import Landing from "./containers/index-container";
import Faq from "./components/faqComponent/faq";
import Privacy from "./components/privacyComponent/privacy";
import Term from "./components/termComponent/term";

import HospitalDetail from "./components/hospitalDetailComponent";
import AmbulanceDetail from "./components/ambulanceDetailComponent";
import NursingDetail from "./components/nursingDetailComponent";
import EquipDetail from "./components/equipDetailComponent";
import AirAmbulanceDetail from "./components/airAmbulanceDetailComponent";

import HospitalList from "./components/hospitalListComponent";
import NursingList from "./components/nursingListComponent";
import AmbulanceList from "./components/ambulanceListComponent";
import EquipList from "./components/equipListComponent";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route exact path="/terms/" component={Term} />
          <Route exact path="/privacy/" component={Privacy} />
          <Route exact path="/faq/" component={Faq} />

          <Route exact path="/web/" component={Landing} />
          <Route exact path="/:city/:locality" component={Landing} />

          <Route exact path="/hospital/" component={HospitalList} />
          <Route exact path="/nursing/" component={NursingList} />
          <Route exact path="/equipment/" component={EquipList} />
          <Route exact path="/ambulance/" component={AmbulanceList} />

          <Route exact path="/hospital/package" component={HospitalDetail} />
          <Route exact path="/ambulance/package" component={AmbulanceDetail} />
          <Route exact path="/nursing/package" component={NursingDetail} />
          <Route exact path="/equipment/package" component={EquipDetail} />
          <Route exact path="/airambulance/" component={AirAmbulanceDetail} />

          <Route component={Category} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
