import React from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../../../server/helpers/routing";

const blockClassName = "card";

const Card = ({
  title,
  html,
  buttons,
  closeUrl,
  className,
  cardClassName,
  children,
  onCloseClick,
  ...props
}) => {
  return (
    <section
      className={`${blockClassName} ${
        cardClassName ? `${blockClassName}--${cardClassName}` : ""
      } ${className || ""}`}
      {...props}
    >
      {title && <h1 className={`${blockClassName}__title`}>{title}</h1>}
      {html && (
        <div className="richtext" dangerouslySetInnerHTML={{ __html: html }} />
      )}
      {buttons && (
        <div className={`${blockClassName}__buttons`}>
          {buttons.map((n, index) => (
            <Link
              to={getUrl(n.url)}
              key={index}
              href={n.url}
              className={`${blockClassName}__buttons__button`}
              title={n.title}
            >
              {n.title}
            </Link>
          ))}
        </div>
      )}
      {closeUrl && (
        <div className="card-close">
          <Link
            to={closeUrl}
            onClick={onCloseClick}
            className="card-close__button"
          />
        </div>
      )}
      {children}
    </section>
  );
};

export default Card;
