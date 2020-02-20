import React from "react";

import { Link } from "react-router-dom";
import { getUrl } from "../../../../server/helpers/routing";

const Tabs = ({ data, url, history, className = "" }) => (
  <div className="tabs">
    {data.map(n => (
      <Link
        key={n.url}
        to={getUrl(`${url}/${n.url}`)}
        title={n.title}
        className={
          "tabs__link" +
          (history.location.pathname.startsWith(`${url}/${n.url}`)
            ? " selected"
            : "")
        }
      >
        {n.title}
      </Link>
    ))}
  </div>
);

export default Tabs;
