import "./_body.scss";

import React from "react";

import Intro from "./intro/Intro";
import Features from "./features/Features";
import Analytics from "./analytics/Analytics";
import Price from "./price/Price";

function Body() {
  return (
    <div className={"body"}>
      <Intro />
      <Features />
      <Analytics />
      <Price />
    </div>
  );
}

export default Body;
