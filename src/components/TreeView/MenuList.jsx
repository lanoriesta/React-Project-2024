import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className=" list-inside ps-3">
      {list && list.length
        ? list.map((ListItem, index) => (
            <MenuItem key={index} item={ListItem} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
