import React from "react";
import _ from "lodash";
import constant from "../../utils/constant";
import "./seo.css";

const Seo = props => {
  if (props.seoUrlList.status === "START") return <div />;
  else if (props.seoUrlList.status === "FAIL") return <div />;

  if (_.isEmpty(props.seoUrlList.seoUrlList)) return <div />;

  const object = props.seoUrlList.seoUrlList;

  return (
    <div class="container">
      {object.map((obj, key) => {
        return (
          <React.Fragment key={key}>
            <p className="menu-label">{obj.head}</p>
            <ul className="menu-list">
              {obj.list.map((obj, key) => {
                return (
                  <li key={key}>
                    <a href={`${constant.baseUrl}${obj.url}`} target="_blank">
                      {obj.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <hr className="spacer is-4" />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Seo;
