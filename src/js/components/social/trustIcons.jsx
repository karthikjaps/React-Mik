import React from "react";

const TrustIcons = ({ icons }) => {
  if (icons) {
    return (
      <ul className="trust_icons">
        {icons.map((n, index) => (
          <li key={index} className="trust_icons-item">
            <img src={n.get("imageUrl")} className="trust_icons-item__icon" />
            <span className="trust_icons-item__text">{n.get("text")}</span>
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export default TrustIcons;
