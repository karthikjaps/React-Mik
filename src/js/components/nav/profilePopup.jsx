import React from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../../../server/helpers/routing";

const ProfilePopup = ({ label, onClick, options, className }) => {
  return (
    <div className={`${className} profile-popup`}>
      <div className="profile-popup__label">{label}</div>
      <div className="profile-popup__content header-tooltip">
        {options &&
          options.map(n => (
            <div key={n.get("id")} className="profile-popup__item">
              <img
                src={n.getIn(["icon", "imageUrl"])}
                alt={n.getIn(["icon", "alternateText"])}
                title={n.getIn(["icon", "title"])}
                className="profile-popup__nav__item__icon"
              />
              <Link
                to={getUrl(n.get("url"))}
                title={n.get("title")}
                onClick={onClick}
                className="profile-popup__item__link"
              >
                {n.get("title")}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfilePopup;
