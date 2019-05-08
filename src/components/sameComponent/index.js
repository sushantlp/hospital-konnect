import React from "react";
import _ from "lodash";
import "./same.css";

import constant from "../../utils/constant";

const nextTabUrl = (obj, props) => {
  const parseUrl = obj.name.replace(/ /g, "-").toLowerCase();

  if (obj.type !== 3) {
    const url = `${constant.baseUrl}/${props.parentProps.match.params.city}/${
      props.parentProps.match.params.locality
    }/${parseUrl}?city=${props.parentState.city}&locality=${
      props.parentState.locality
    }&type=${obj.type}&category=${obj.cat_id}&q=${obj.key_id}`;

    window.open(url);
  } else {
    const url = `${constant.baseUrl}/${props.parentProps.match.params.city}/${
      props.parentProps.match.params.locality
    }/air-ambulance/${parseUrl}?partner=${obj.key_id}&category=${
      obj.cat_id
    }&flag=false`;
    window.open(url);
  }
};

const Same = props => {
  if (props.sideBarList.status === "START") return <div />;
  else if (props.sideBarList.status === "FAIL") return <div />;

  if (_.isEmpty(props.sideBarList.sideBarList)) return <div />;

  const object = props.sideBarList.sideBarList;

  return (
    <div className="same-container">
      <div class="panel-block">
        <div class="container">
          {object.map((obj, key) => {
            return (
              <React.Fragment key={key}>
                <div class="card" onClick={() => nextTabUrl(obj, props)}>
                  <div class="card-image">
                    <img src={obj.img} alt={obj.name} />
                  </div>
                  <div class="card-content">
                    <div class="content">{obj.name}</div>
                  </div>
                </div>
                <hr className="spacer is-1" />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Same;
