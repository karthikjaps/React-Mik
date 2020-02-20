import React from "react";
import { trackPromotionClicks } from "./analytics";

const ColumnBanner = ({ id, src, title, linkText, className }) => (
  <div
    className={`column-banners__banner ${className || ""}`}
    onClick={() => trackPromotionClicks([{ id, title }])}
  >
    <img
      src={src}
      title={title}
      alt={title}
      className="column-banners__banner__img"
    />
    <div className="column-banners__banner-content">
      <span className="column-banners__banner__title">{title}</span>
      {linkText && (
        <span className="button button--ghost column-banners__banner__button">
          {linkText}
        </span>
      )}
    </div>
  </div>
);

export default ColumnBanner;
