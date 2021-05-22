import {ReactComponent as Chevron} from "../../../../../core/ui/assets/icons/chevron-right.svg";

import "./_feature-card.scss";

import React from "react";

export type Card = {
  icon: JSX.Element;
  title: string;
  description: string;
  to: string;
};

interface FeatureCardProps {
  card: Card;
}

function FeatureCard({card}: FeatureCardProps) {
  return (
    <div className={"feature-card"}>
      {card.icon}

      <div className={"feature-card__content"}>
        <h4 className={"feature-card__content__title typography--h4"}>{card.title}</h4>
        <p className={"feature-card__content__description typography--body"}>
          {card.description}
        </p>

        <div className={"feature-card__content__link"}>
          <a className={"feature-card__content__redirection"} href={card.to}>
            {"Learn more..."}
          </a>

          <Chevron />
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
