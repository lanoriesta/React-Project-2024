import React, { useState } from "react";
import MenuList from "./MenuList";
import { PlusIcon } from "../../assets/plusIcon";
import { MinusIcon } from "../../assets/minusIcon";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const hanldeClickMore = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };

  console.log(displayCurrentChildren);

  const hanldeIcon = () => {
    if (displayCurrentChildren[item.label]) {
      return (
        <MinusIcon
          className=" cursor-pointer"
          onClick={() => hanldeClickMore(item.label)}
        />
      );
    }
    return (
      <PlusIcon
        className=" cursor-pointer"
        onClick={() => hanldeClickMore(item.label)}
      />
    );
  };

  return (
    <li>
      <div className="flex items-center gap-2">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? hanldeIcon() : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
