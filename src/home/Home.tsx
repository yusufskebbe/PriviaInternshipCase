import "./_home.scss";

import React from "react";

import Header from "../main/page/header/Header";
import Body from "../main/page/body/Body";

function Home() {
  return (
    <div className="home">
      <Header />
      <Body />
    </div>
  );
}

export default Home;
