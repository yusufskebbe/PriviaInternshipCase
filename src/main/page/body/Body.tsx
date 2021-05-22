import "./_body.scss";

import React from "react";

import Intro from "./intro/Intro";
import Features from "./features/Features";
import Analytics from "./analytics/Analytics";

function Body() {
  return (
    <div className={"body"}>
      <Intro />
      <Features />
      <Analytics />
    </div>
  );
}

export default Body;
