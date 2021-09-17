import React from "react";
const Product = ({ image, name, desc }) => {
  return (
    <div className="product-item">
      <img src={image} alt="" className="rounded mb-6 shadow h-52	" />
      <h2 className="text-2xl mb-2 text-center">{name}</h2>
      <p className="mb-2 text-center">{desc}</p>
    </div>
  );
};

export default Product;
