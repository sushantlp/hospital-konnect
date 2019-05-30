import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import PackageBookingComponent from "../components/packageBookingComponent";

import { postOfflineBed } from "../actions/offline-bed-action";
import { postOnlineBed } from "../actions/online-bed-action";

import { postOnlineAmbulance } from "../actions/online-ambulance-action";
import { postOfflineAmbulance } from "../actions/offline-ambulance-action";

import { postOfflineEquipment } from "../actions/offline-equipment-action";
import { postOnlineEquipment } from "../actions/online-equipment-action";

import { postOnlineNursing } from "../actions/online-nursing-action";
import { postOfflineNursing } from "../actions/offline-nursing-action";

function mapStateToProps(state) {
  return {
    onlineBed: state.onlineBed,
    offlineBed: state.offlineBed,
    onlineAmbulance: state.onlineAmbulance,
    offlineAmbulance: state.offlineAmbulance,
    offlineEquipment: state.offlineEquipment,
    onlineEquipment: state.onlineEquipment,
    offlineNursing: state.offlineNursing,
    onlineNursing: state.onlineNursing
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      postOfflineBed: postOfflineBed,
      postOnlineBed: postOnlineBed,

      postOnlineAmbulance: postOnlineAmbulance,
      postOfflineAmbulance: postOfflineAmbulance,

      postOfflineEquipment: postOfflineEquipment,
      postOnlineEquipment: postOnlineEquipment,

      postOfflineNursing: postOfflineNursing,
      postOnlineNursing: postOnlineNursing
    }
  )(PackageBookingComponent)
);
