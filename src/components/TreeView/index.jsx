import React, { useState } from "react";
import Menu from "./data";
import MenuList from "./MenuList";

const TreeviewMenu = () => {
  const [childData, setChildData] = useState([]);

  // console.log(
  //   Menu.map((child, index) =>
  //     child.children === undefined
  //       ? "no children"
  //       : child.children.map((item) => item.label)
  //   )
  // );
  return (
    <div className="Parent h-screen ">
      <div className=" flex justify-evenly items-start">
        <div className="container text-left basis-1/3 bg-blue-400 text-white h-screen">
          <h1>TreeviewMenu</h1>
          <MenuList list={Menu} />
        </div>
        <div className="container">
          <h1>body</h1>
        </div>
      </div>
    </div>
  );
};

export default TreeviewMenu;
