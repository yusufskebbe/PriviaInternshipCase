import "./_home.scss";

import React from "react";

import Header from "../main/page/header/Header";
import Body from "../main/page/body/Body";
import Footer from "../main/page/footer/Footer";

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
