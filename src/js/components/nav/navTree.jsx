import React from "react";

import NavTreeItem from "./navTreeItem";

const NavTree = ({ nav, onLinkClick }) => {
  let children = [];
  if (nav.children) {
    children = nav.children.map((item, index) => {
      return (
        <li className="nav__item" key={index}>
          <NavTreeItem
            name={item.get("name")}
            url={item.get("url")}
            icon={item.get("icon")}
            isActive={item.get("isActive")}
            isExternal={item.get("isExternal")}
            onClick={onLinkClick}
          />
        </li>
      );
    });
  }

  return (
    <ul className="nav__list">
      <li className="nav__item">
        <NavTreeItem
          name={nav.name}
          url={nav.url}
          icon={nav.icon}
          isActive={nav.isActive}
          isExternal={nav.isExternal}
          onClick={onLinkClick}
        />
      </li>
      {children}
    </ul>
  );
};

export default NavTree;
