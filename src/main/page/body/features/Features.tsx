import {ReactComponent as PieIcon} from "../../../../core/ui/assets/icons/pie.svg";

import "./_features.scss";

import React from "react";

import Line from "../../../../components/line/Line";
import FeatureCard, {Card} from "./card/FeatureCard";

const featureCardItems: Card[] = [
  {
    icon: <PieIcon className={"features__icon"} />,
    description: "Create reports with an easy to use drag-and-drop designer.",
    title: "Analyze your data",
    to: "#"
  },
  {
    icon: <PieIcon className={"features__icon"} />,
    description: "Create reports with an easy to use drag-and-drop designer.",
    title: "Analyze your data",
    to: "#"
  },
  {
    icon: <PieIcon className={"features__icon"} />,
    description: "Create reports with an easy to use drag-and-drop designer.",
    title: "Analyze your data",
    to: "#"
  },
  {
    icon: <PieIcon className={"features__icon"} />,
    description: "Create reports with an easy to use drag-and-drop designer.",
    title: "Analyze your data",
    to: "#"
  }
];

function Features() {
  return (
    <div className={"features"}>
      <div className={"features__content"}>
        <div className={"features__subtext"}>
          <Line />
          <p className={"features__subtitle typography--subtitle"}>{"Features"}</p>
        </div>
        <div className={"features__title"}>
          <h3 className={"features__title__solution typography--h3"}>
            {"Our solution"}
            <br />
            {"for your business"}
          </h3>
          <p className={"features__title__description typography--body"}>
            {
              "We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."
            }
          </p>
        </div>
        <div className={"features__list"}>
          {featureCardItems.map((feature) => {
            return <FeatureCard key={feature.title} card={feature} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
