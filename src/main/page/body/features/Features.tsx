import PieIcon from "../../../../core/ui/assets/icons/pie.png";

import "./_features.scss";

import React from "react";

import Line from "../../../../components/line/Line";
import FeatureCard, {Card} from "./card/FeatureCard";

const featureCardItems: Card[] = [
  {
    icon: PieIcon,
    description: "Create reports with an easy to use drag-and-drop designer.",
    title: "Analyze your data",
    to: "#"
  },
  {
    icon: PieIcon,
    description: "Create reports with an easy to use drag-and-drop designer.",
    title: "Analyze your data",
    to: "#"
  },
  {
    icon: PieIcon,
    description: "Create reports with an easy to use drag-and-drop designer.",
    title: "Analyze your data",
    to: "#"
  },
  {
    icon: PieIcon,
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
          {featureCardItems.map((feature, index) => {
            return (
              <FeatureCard key={`feature.${index}`} card={feature} type={"standart"} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
