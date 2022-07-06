import React from "react";

const ProductCard = ({ productInfo }) => {
  const {
    productName,
    brand,
    mrp,
    discountPrice,
    rating,
    unitsAvailable,
    availableSizes,
    productImg,
  } = productInfo;
  return (
    <div className="flex justify-start flex-col relative items-start rounded-sm overflow-hidden cursor-pointer shadow-md transition-all">
      <span
        className={`absolute top-1 right-1 rounded-md z-10 text-white font-bold px-2 ${
          Number(rating) >= 4
            ? "bg-green-500"
            : Number(rating) < 4 && Number(rating) >= 3
            ? "bg-yellow-500"
            : "bg-red-500"
        }  `}
      >
        {rating}
      </span>
      <div className="image-section h-[20rem]">
        <img
          className="w-[15rem] h-full object-cover"
          src={productImg}
          alt={productName}
        />
      </div>
      <div className="details px-1 py-2 relative w-full">
        <p className="font-bold">{productName}</p>
        <div className="flex justify-start items-center gap-2">
          <span className="font-semibold text-md">${discountPrice}</span>
          <span className="line-through text-sm font-light">${mrp}</span>
        </div>
        <div>
          <span className="font-thin">Sizes: </span>
          {availableSizes?.map((size) => (
            <span className="pr-2 " key={size}>
              {size}
            </span>
          ))}
        </div>
        {unitsAvailable < 20 && (
          <span className="absolute bg-red-400 px-2 py-1 rounded-sm bottom-1 right-1">{`${unitsAvailable} left!!`}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
