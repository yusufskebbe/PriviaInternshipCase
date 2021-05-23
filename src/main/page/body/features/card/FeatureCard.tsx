import {ReactComponent as Chevron} from "../../../../../core/ui/assets/icons/chevron-right.svg";

import "./_feature-card.scss";

import React from "react";
import classNames from "classnames";

export type Card = {
  icon: string;
  title: string;
  description: string;
  to?: string;
};

interface FeatureCardProps {
  card: Card;
  type: "standart" | "more";
}

function FeatureCard({card, type}: FeatureCardProps) {
  const featureCardClassName = classNames("feature-card", {
    "feature-card--more": type === "more"
  });

  return (
    <div className={featureCardClassName}>
      <img className={"feature-card__icon"} src={card.icon} alt={"feature icon"} />

      <div className={"feature-card__content"}>
        <h4 className={"feature-card__content__title typography--h4"}>{card.title}</h4>
        <p className={"feature-card__content__description typography--body"}>
          {card.description}
        </p>

        {type === "standart" && (
          <div className={"feature-card__content__link"}>
            <a className={"feature-card__content__redirection"} href={card.to}>
              {"Learn more..."}
            </a>

            <Chevron />
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
