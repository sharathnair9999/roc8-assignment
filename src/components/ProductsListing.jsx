import React from "react";
import { useProducts } from "../contexts";
import { filterProducts } from "../contexts/products-utils";
import ProductCard from "./ProductCard";

const ProductsListing = () => {
  const {
    productState: { products, filterBy },
  } = useProducts();

  const filteredProducts = filterProducts(products, filterBy);

  return (
    <div className="rounded-sm w-full pt-10 bg-white min-h-[calc(100vh-5rem)] p-2 overflow-auto flex justify-start  items-start flex-wrap gap-4">
      {filteredProducts?.map((product) => (
        <ProductCard key={product.productId} productInfo={product} />
      ))}
    </div>
  );
};

export default ProductsListing;
