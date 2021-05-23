import PieIcon from "../../../../../core/ui/assets/icons/pie.png";

import "./more-features.scss";

import React from "react";

import Line from "../../../../../components/line/Line";
import FeatureCard, {Card} from "../card/FeatureCard";

const featureCardItems: Card[] = [
  {
    icon: PieIcon,
    description:
      "No matter what kind of home you have to share, you can increase your earnings.",
    title: "Easy customization"
  },
  {
    icon: PieIcon,
    description:
      "No matter what kind of home you have to share, you can increase your earnings.",
    title: "Secure and fast"
  },
  {
    icon: PieIcon,
    description:
      "No matter what kind of home you have to share, you can increase your earnings.",
    title: "Powerful dashboard"
  },
  {
    icon: PieIcon,
    description:
      "No matter what kind of home you have to share, you can increase your earnings.",
    title: "Cloud upload"
  },
  {
    icon: PieIcon,
    description:
      "No matter what kind of home you have to share, you can increase your earnings.",
    title: "Proven Technology"
  },
  {
    icon: PieIcon,
    description:
      "No matter what kind of home you have to share, you can increase your earnings.",
    title: "98.99% satisfaction"
  }
];

function MoreFeatures() {
  return (
    <div className={"features-more"}>
      <div className={"features-more__content"}>
        <div className={"features__subtext"}>
          <Line />
          <p className={"features__subtitle typography--subtitle"}>{"More Features"}</p>
        </div>
        <div className={"features__title"}>
          <h3 className={"features__title__solution typography--h3"}>
            {
              "We're more than an analytic tool. Explore our features, and satisfy your customers"
            }
          </h3>
        </div>

        <div className={"features-more__list"}>
          {featureCardItems.map((featureCard) => {
            return (
              <FeatureCard key={featureCard.title} card={featureCard} type={"more"} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MoreFeatures;
