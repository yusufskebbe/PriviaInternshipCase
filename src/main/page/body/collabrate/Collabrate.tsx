import {ReactComponent as TickIcon} from "../../../../core/ui/assets/icons/tick.svg";
import CollabrateImg from "../../../../core/ui/assets/images/collabrate.png";

import "./_collabrate.scss";

import React from "react";

import Line from "../../../../components/line/Line";

const collabrateItems: string[] = [
  "Organize your data",
  "Always in sync",
  "Work with any team",
  "Embedded analytics",
  "Business analytics"
];

function Collabrate() {
  return (
    <div className={"collabrate"}>
      <div className={"collabrate__content"}>
        <img
          className={"collabrate__content__img"}
          src={CollabrateImg}
          alt={"Collabrate"}
        />

        <div className={"collabrate__content__info"}>
          <div className={"analytics__subtext"}>
            <Line />
            <p className={"analytics__subtitle typography--subtitle"}>{"Collaborate"}</p>
          </div>

          <h3 className={"features__title__solution typography--h3"}>
            {"Collaborate with your team anytime, anywhere"}
          </h3>

          <p className={"analytics__title__description typography--body"}>
            {
              "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."
            }
          </p>

          <div className={"collabrate__content__list"}>
            {collabrateItems.map((item) => {
              return (
                <div key={item} className={"collabrate__content__list-item"}>
                  <TickIcon />

                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collabrate;
