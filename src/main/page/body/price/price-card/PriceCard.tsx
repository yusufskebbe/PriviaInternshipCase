import {ReactComponent as TickIcon} from "../../../../../core/ui/assets/icons/tick.svg";

import "./_price-card.scss";

import React from "react";
import classNames from "classnames";

import Button from "../../../../../components/button/Button";

type PriceCardType = "Standart" | "Essentials" | "Premium";

export interface PriceCardProps {
  price: number;
  type: PriceCardType;
  description: string;
  properties: string[];
  isBillMonthly: boolean;
}

function PriceCard({
  price,
  type,
  description,
  properties,
  isBillMonthly
}: PriceCardProps) {
  const priceCardClassName = classNames("price-card", {
    "price-card--standart": type === "Standart",
    "price-card--essentials": type === "Essentials",
    "price-card--premium": type === "Premium"
  });

  return (
    <div className={priceCardClassName}>
      <div className={"price-card__content"}>
        <div className={"price-card__header"}>
          <p className={"price-card__header__price typography--h3"}>{`$${
            // eslint-disable-next-line no-magic-numbers
            isBillMonthly ? price : (price * 12 - (price * 12 * 15) / 100).toFixed(0)
          }`}</p>
          <p className={"price-card__header__plan typography--small"}>
            {isBillMonthly ? "/month" : "/annual"}
          </p>
        </div>

        <div className={"price-card__title"}>
          <h4
            style={{fontWeight: 800, color: type === "Premium" ? "white" : "black"}}
            className={"typography--body"}>
            {type}
          </h4>
          <p className={"price-card__description typography--small"}>{description}</p>
        </div>

        <div className={"price-card__properties"}>
          {properties.map((property) => {
            return (
              <div className={"price-card__property-item"}>
                <TickIcon />
                <p>{property}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Button customClassName={"price-card__button button--light"}>
        {"Start free trial"}
      </Button>
    </div>
  );
}

export default PriceCard;
