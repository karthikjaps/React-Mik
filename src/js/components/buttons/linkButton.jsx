import React from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../../../server/helpers/routing";

const LinkButton = props => {
  return (
    <Link
      to={getUrl(props.toUrl)}
      className={props.className}
      title={props.title}
      onClick={props.onLinkClick}
      onTouchStart={e => {
        e.target.classList.add(
          props.touchClassName ? props.touchClassName : "button--touch"
        );
      }}
      onTouchEnd={e => {
        e.target.classList.remove(
          props.touchClassName ? props.touchClassName : "button--touch"
        );
      }}
    >
      {props.text}
    </Link>
  );
};

export default LinkButton;
