import "./_tab-header.scss";

import React from "react";
import classNames from "classnames";

import {TabItem} from "../Tab";

type TabHeaderItem = {
  tab: TabItem;
  onClick: (index: number) => void;
  isActive: boolean;
  index: number;
};

function TabHeaderItem({tab, onClick, isActive, index}: TabHeaderItem) {
  return (
    <div
      id={tab.id}
      role={"button"}
      tabIndex={0}
      onKeyPress={handleClick}
      onClick={handleClick}
      className={classNames("tab-header typography--button", {
        "tab-header--is-active": isActive
      })}>
      {tab.content}
    </div>
  );

  function handleClick() {
    onClick(index);
  }
}

export default TabHeaderItem;
