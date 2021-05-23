import "./_price.scss";

import React, {useState} from "react";
import Switch from "../../../../components/switch/Switch";
import PriceCard, {PriceCardProps} from "./price-card/PriceCard";
import Tab from "../../../../components/tab/Tab";

const priceCardItems: Omit<PriceCardProps, "isBillMonthly">[] = [
  {
    price: 23,
    type: "Standart",
    description: "All the basics for businesses that are just getting started.",
    properties: ["Single project use", "Basic dashboard", "All components included"]
  },
  {
    price: 99,
    type: "Essentials",
    description: "Better for growing businesses that want more customers.",
    properties: [
      "Unlimited project use",
      "Advanced dashboard",
      "All components included",
      "Advanced insight"
    ]
  },
  {
    price: 139,
    type: "Premium",
    description: "All the basics for businesses that are just getting started.",
    properties: [
      "Unlimited project use",
      "Advanced dashboard",
      "All components included",
      "Advanced insight"
    ]
  }
];

function Price() {
  const [isBillMonthly, setIsBillMonthly] = useState(true);

  return (
    <div className={"price"}>
      <div className={"price__content"}>
        <h3 className={"price__content__title typography--h3"}>
          {"Choose the plan that’s right for your business"}
        </h3>

        <p className={"typography--body"}>
          {"30-day free trial, cancel any time. No credit card required."}
        </p>

        <div className={"price__content__switch"}>
          <p className={"typography--body"}>{"Bill monthly"}</p>

          <Switch isToggledOn={!isBillMonthly} onToggle={handlePriceToggle} />

          <p className={"typography--body"}>{"Bill Annually"}</p>
          <p className={"price__content__switch__discount typography--body"}>
            {"Save 15%"}
          </p>
        </div>

        <div className={"price__content__card"}>
          {priceCardItems.map((priceCard) => {
            return (
              <PriceCard
                key={priceCard.type}
                description={priceCard.description}
                isBillMonthly={isBillMonthly}
                price={priceCard.price}
                type={priceCard.type}
                properties={priceCard.properties}
              />
            );
          })}
        </div>

        <div className={"price__content__tab"}>
          <Tab
            items={[
              {id: "1", content: "Standart"},
              {id: "2", content: "Essentials"},
              {id: "3", content: "Premium"}
            ]}>
            {priceCardItems.map((priceCard) => {
              return (
                <PriceCard
                  key={priceCard.type}
                  description={priceCard.description}
                  isBillMonthly={isBillMonthly}
                  price={priceCard.price}
                  type={priceCard.type}
                  properties={priceCard.properties}
                />
              );
            })}
          </Tab>
        </div>
      </div>
    </div>
  );

  function handlePriceToggle() {
    setIsBillMonthly(!isBillMonthly);
  }
}

export default Price;
