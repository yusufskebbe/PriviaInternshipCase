import shopify from "../../../../core/ui/assets/images/shopify.png";
import airbnb from "../../../../core/ui/assets/images/airbnb.png";
import user1 from "../../../../core/ui/assets/images/user1.png";
import user2 from "../../../../core/ui/assets/images/user2.png";

import {ReactComponent as Slack} from "../../../../core/ui/assets/icons/slack.svg";
import {ReactComponent as Hubspot} from "../../../../core/ui/assets/icons/hubpot.svg";
import {ReactComponent as Square} from "../../../../core/ui/assets/icons/square.svg";
import {ReactComponent as ServiceTitan} from "../../../../core/ui/assets/icons/serviceTitan.svg";
import {ReactComponent as Cogni} from "../../../../core/ui/assets/icons/cogni.svg";
import {ReactComponent as GrubHub} from "../../../../core/ui/assets/icons/grubhub.svg";
import {ReactComponent as Chevron} from "../../../../core/ui/assets/icons/chevron-right.svg";

import "./_testimonial.scss";

import React from "react";

import TestimonialCard, {TestimonialCardProps} from "./testimonialCard/TestimonialCard";

const testimonialCardItems: TestimonialCardProps[] = [
  {
    brandSrc: shopify,
    description:
      "I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality.",
    user: {
      avatarSrc: user1,
      name: "Harold Tyler",
      title: "Product Designer"
    }
  },
  {
    brandSrc: airbnb,
    description:
      "My experience with this platform so far has been great. Everything is easy, from creating visualization, scheduling, collaboration and many more.",
    user: {
      avatarSrc: user2,
      name: "Ryan Holmes",
      title: "Motion design / animator"
    }
  }
];

function Testimonial() {
  return (
    <div className={"testimonial"}>
      <p style={{textAlign: "center"}}>
        {"More than 1.8 million people across 50,000 companies choose Oval "}
      </p>
      <div className={"testimonial__companies"}>
        <Square className={"testimonial__company-icon"} />
        <Cogni className={"testimonial__company-icon"} />
        <Hubspot className={"testimonial__company-icon"} />
        <Slack className={"testimonial__company-icon"} />
        <GrubHub className={"testimonial__company-icon"} />
        <ServiceTitan className={"testimonial__company-icon"} />
      </div>
      <div className={"testimonial__cards"}>
        {testimonialCardItems.map((testimonialCardItem) => {
          return (
            <TestimonialCard
              key={testimonialCardItem.user.name}
              brandSrc={testimonialCardItem.brandSrc}
              description={testimonialCardItem.description}
              user={testimonialCardItem.user}
            />
          );
        })}
      </div>
      <div className={"testimonial__see-more"}>
        <a href={"See All"}> {"See All  Testimonial"} </a>
        <Chevron />
      </div>
    </div>
  );
}

export default Testimonial;
