import dashboard from "../../../../core/ui/assets/images/dashboard.png";

import "./_intro.scss";

import React from "react";

import Button from "../../../../components/button/Button";

function Intro() {
  return (
    <div className={"intro"}>
      <h1 className={"typography--h1"}>
        {"Powerfull analytics tools for your business"}
      </h1>
      <p className={"intro__content typography--body"}>
        {
          "An awesome tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers"
        }
      </p>
      <div className={"intro__button"}>
        <Button>{"Start free trial"}</Button>
        <Button customClassName={"button--light"}>{"View live demo"}</Button>
      </div>
      <img className={"intro__dashboard"} src={dashboard} alt="dashboard" />
    </div>
  );
}

export default Intro;
