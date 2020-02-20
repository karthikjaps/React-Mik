import React from "react";

const View = ({ data }) => {
  return (
    <div className="view__lightbox">
      {data.type === "video" ? (
        <iframe
          className="view__video__iframe"
          src={data.url}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ) : (
        <img className="view__lightbox__img" src={data.url} />
      )}
    </div>
  );
};

export default View;
