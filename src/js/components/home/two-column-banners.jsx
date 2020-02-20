import React from "react";
import { Link } from "react-router-dom";

import ColumnBanner from "./column-banner";
import { getUrl } from "../../../../server/helpers/routing";

const TwoColumnBanners = ({ data }) => {
  return (
    <section className="column-banners column-banners--two container-section">
      {data.map((n, index) => [
        n.get("link") && n.get("isExternal") && (
          <a
            key={index}
            href={n.get("link")}
            target="_blank"
            className={
              "column-banners__banner column-banners__banner--two column-banners__banner--dark"
            }
          >
            <ColumnBanner
              src={n.get("src")}
              title={n.get("title")}
              link={n.get("link")}
              linkText={n.get("linkText")}
            />
          </a>
        ),
        n.get("link") && !n.get("isExternal") && (
          <Link
            key={index}
            to={getUrl(n.get("link"))}
            className={
              "column-banners__banner column-banners__banner--two column-banners__banner--dark"
            }
          >
            <ColumnBanner
              src={n.get("src")}
              title={n.get("title")}
              link={n.get("link")}
              linkText={n.get("linkText")}
            />
          </Link>
        ),
        !n.get("link") && (
          <ColumnBanner
            key={index}
            src={n.get("src")}
            title={n.get("title")}
            className={
              "column-banners__banner--two column-banners__banner--dark"
            }
          />
        )
      ])}
    </section>
  );
};

export default TwoColumnBanners;
