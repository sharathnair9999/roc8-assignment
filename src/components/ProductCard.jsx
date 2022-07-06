import React from "react";

const ProductCard = ({ productInfo }) => {
  const {
    productName,
    brand,
    mrp,
    discountPrice,
    rating,
    unitsAvailable,
    productImg,
  } = productInfo;
  return (
    <div className="flex justify-start flex-col items-start rounded-sm overflow-hidden cursor-pointer shadow-md hover:scale-105 transition-all">
      <div className="image-section h-[20rem]">
        <img
          className="w-[15rem] h-full object-cover"
          src={productImg}
          alt={productName}
        />
      </div>
      <div className="details px-1 py-2">
        <p className="font-semibold">{productName}</p>
      </div>
    </div>
  );
};

export default ProductCard;
