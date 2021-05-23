import "./_testimonial-card.scss";

import React from "react";

type TestimonialUser = {
  avatarSrc: string;
  name: string;
  title: string;
};

export interface TestimonialCardProps {
  brandSrc: string;
  description: string;
  user: TestimonialUser;
}

function TestimonialCard({brandSrc, description, user}: TestimonialCardProps) {
  return (
    <div className={"testimonial-card"}>
      <div className={"testimonial-card__brand"}>
        <img className={"testimonial-card__brand-image"} src={brandSrc} alt={"brand"} />
      </div>

      <p className={"typography--h4"}>{description}</p>
      <div className={"testimonial-card__user"}>
        <img src={user.avatarSrc} alt={"user"} />
        <div className={"testimonial-card__user__info"}>
          <p className={"typography--body"}>{user.name}</p>
          <p style={{color: "var(--dark-gray)"}} className={"typography--small"}>
            {user.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
