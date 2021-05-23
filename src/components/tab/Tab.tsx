import "./_tab.scss";

import React, {useState} from "react";
import TabHeaderItem from "./tab-header/TabHeaderItem";

export type TabItem = {
  id: string;
  content: React.ReactNode;
};

interface TabProps {
  items: TabItem[];
  initialActiveTabIndex?: number;
  children: React.ReactNode;
}

function Tab({items, initialActiveTabIndex = 0, children}: TabProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(initialActiveTabIndex);

  return (
    <div className={"tab"}>
      <div className={"tab__header"}>
        {items.map((item, index) => {
          return (
            <TabHeaderItem
              tab={item}
              index={index}
              isActive={activeTabIndex === index}
              onClick={handleChangeActiveTab}
            />
          );
        })}
      </div>

      <div className={"tab__body"}>{children[activeTabIndex]}</div>
    </div>
  );

  function handleChangeActiveTab(index: number) {
    setActiveTabIndex(index);
  }
}

export default Tab;
