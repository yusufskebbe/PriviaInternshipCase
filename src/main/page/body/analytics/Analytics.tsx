import analytics from "../../../../core/ui/assets/images/analytics.png";
import {ReactComponent as DashboardIcon} from "../../../../core/ui/assets/icons/dashboard-icon.svg";
import {ReactComponent as SyncIcon} from "../../../../core/ui/assets/icons/sync.svg";

import "./_analytics.scss";

import React from "react";

import Line from "../../../../components/line/Line";

function Analytics() {
  return (
    <div className={"analytics"}>
      <div className={"analytics__content"}>
        <img className={"analytics__image"} src={analytics} alt={"analytics"} />
        <div className={"analytics__body"}>
          <div className={"analytics__subtext"}>
            <Line />
            <p className={"analytics__subtitle typography--subtitle"}>{"Analytics"}</p>
          </div>

          <div className={"analytics__title"}>
            <h3 className={"analytics__title__solution typography--h3"}>
              {"Analyze your data"}
              <br />
              {"with our analyze tools"}
            </h3>
            <p className={"analytics__title__description typography--body"}>
              {
                "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."
              }
            </p>

            <div className={"analytics__item-list"}>
              <div className={"analytics__item"}>
                <DashboardIcon />
                <div className={"analytics__item__content"}>
                  <h4 className={"analytics__item__title"}>{"Powerful dashboard"}</h4>
                  <p className={"analytics__item__description"}>
                    {"Combine multiple reports into a single beautiful dashboard."}
                  </p>
                </div>
              </div>

              <div className={"analytics__item"}>
                <SyncIcon />
                <div className={"analytics__item__content"}>
                  <p className={"analytics__item__title typography--button"}>
                    {"Always in Sync"}
                  </p>
                  <p className={"analytics__item__description typography--body"}>
                    {"Don’t worry about the data, always be synchronized."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
