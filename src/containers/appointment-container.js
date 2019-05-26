import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import AppointmentComponent from "../components/appointmentComponent";
import { postOfflineAppointment } from "../actions/offline-appointment-action";
import { postOnlineAppointment } from "../actions/online-appointment-action";

function mapStateToProps(state) {
  return {
    categoryDetail: state.categoryDetail,
    onlineAppointment: state.onlineAppointment,
    offlineAppointment: state.offlineAppointment
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      postOfflineAppointment: postOfflineAppointment,
      postOnlineAppointment: postOnlineAppointment
    }
  )(AppointmentComponent)
);
