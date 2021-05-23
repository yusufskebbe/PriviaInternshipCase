import "./_home.scss";

import React from "react";

import Body from "../main/page/body/Body";
import Footer from "../main/page/footer/Footer";
import Header from "../main/page/header/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
