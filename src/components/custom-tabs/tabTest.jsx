import React, { useState } from "react";

const TabTest = ({ tabContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (currentIndex) => {
    setCurrentTabIndex((t) => (t = currentIndex));
    onChange(currentIndex);
  };
  return (
    <div className="Parent h-screen">
      <div className="container flex flex-col py-4">
        <div className="heading flex gap-3">
          {tabContent.map((tabItem, index) => (
            <div
              style={{ backgroundColor: tabItem.color }}
              className={`tab-item transition-all cursor-pointer p-4 text-left text-white rounded-tr-2xl ${
                currentTabIndex === index ? "active-tab" : ""
              }`}
              onClick={() => handleOnClick(index)}
              key={index}
            >
              <span>{tabItem.label}</span>
            </div>
          ))}
        </div>
        <div
          className="content text-white p-5"
          style={{ backgroundColor: tabContent[currentTabIndex].color }}
        >
          {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
        </div>
      </div>
    </div>
  );
};

export default TabTest;
