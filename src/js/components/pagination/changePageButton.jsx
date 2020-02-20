import React from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../../../server/helpers/routing";

const ChangePageButton = ({
  pageNumber,
  isDisabled,
  url,
  queryString,
  text,
  onClick,
  queryParams
}) => {
  let searchParams = new URLSearchParams(queryString);
  searchParams.set(queryParams.PAGE_NUMBER_QUERY_STRING_PARAM, pageNumber);

  return (
    <Link
      to={getUrl(`${url}?${searchParams.toString()}`)}
      className={`pagination--button button${isDisabled ? " disabled" : ""}`}
      onClick={onClick}
      title={text}
      onTouchStart={e => {
        e.target.classList.add("button--touch");
      }}
      onTouchEnd={e => {
        e.target.classList.remove("button--touch");
      }}
    >
      {text}
    </Link>
  );
};

export default ChangePageButton;
