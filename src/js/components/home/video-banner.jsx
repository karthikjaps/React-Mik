import React from "react";

const VideoBanner = ({ src, title, linkText, className }) => (
  <div className={`column-banners__banner ${className || ""}`}>
    <iframe className="column-banners__banner__video" src={src} />
  </div>
);

export default VideoBanner;
