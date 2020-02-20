import React from "react";

const Thumb = ({ data, className }) => {
  return (
    <div className={`${className ? className : ""}`}>
      <img
        src={data.get("image")}
        alt={data.get("title")}
        title={data.get("title")}
        className="cart-product__thumb__img"
      />
    </div>
  );
};

export default Thumb;
