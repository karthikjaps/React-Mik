import React from "react";

const Social = ({ links }) => {
  if (links) {
    return (
      <ul className="social-links">
        {links.map(n => (
          <li key={n.get("id")} className="social-links-item">
            <a
              href={n.get("url")}
              target="_blank"
              className={
                "social-links-item__link " +
                n
                  .get("platform")
                  .toLowerCase()
                  .replace(/\s/, "-")
              }
            >
              {n.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export default Social;
