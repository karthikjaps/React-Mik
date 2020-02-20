import React from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../../../server/helpers/routing";

const NavTreeItem = ({ url, name, icon, isActive, onClick, isExternal }) => {
  const className = isActive ? "selected" : "";
  return (
    <div>
      {isExternal && (
        <a
          href={url}
          target={"_blank"}
          download={url.match(/\.\w{3,4}$/)}
          className={`nav__link ${className}`}
          onClick={onClick}
        >
          <i className="nav__icon">{icon && <img src={icon} alt={name} />}</i>
          {name}
        </a>
      )}
      {!isExternal && (
        <Link
          to={getUrl(url)}
          title={name}
          className={`nav__link ${className}`}
          onClick={onClick}
        >
          <i className="nav__icon">{icon && <img src={icon} alt={name} />}</i>
          {name}
        </Link>
      )}
    </div>
  );
};

export default NavTreeItem;
