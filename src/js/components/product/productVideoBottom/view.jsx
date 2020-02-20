import React from "react";

const View = ({ data }) => {
  return (
    <div className="view__video">
      <iframe
        className="view__video__iframe"
        src={data.videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default View;
