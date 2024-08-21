import React from "react";
import TabTest from "./tabTest";
import "./tabs.css";

function randomContent() {
  return <div>Just a random content</div>;
}

const CustomTabs = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: "This is the content for tab 1",
      color: "red",
    },
    {
      label: "Tab 2",
      content: "This is the content for tab 2",
      color: "green",
    },
    {
      label: "Tab 3",
      content: "This is the content for tab 3",
      color: "blue",
    },
    {
      label: "Tab 4",
      content: randomContent(),
      color: "orange",
    },
  ];

  const activeTabIndex = (activeIndex) => {
    console.log(activeIndex);
  };
  return (
    <>
      <TabTest tabContent={tabs} onChange={activeTabIndex} />
    </>
  );
};

export default CustomTabs;
