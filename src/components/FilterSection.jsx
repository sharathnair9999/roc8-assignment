import React from "react";
import { useProducts } from "../contexts";
import { actions } from "../contexts/product-actions";
import { resetFilters } from "../contexts/products-utils";

const FilterSection = () => {
  const {
    productDispatch,
    productState: {
      products,
      filterBy: {
        filterByGender,
        filterBySize,
        filterByBrand,
        filterByStock,
        sortByPrice,
      },
    },
  } = useProducts();

  const {
    FILTER_BY_SIZE,
    FILTER_BY_BRAND,
    FILTER_BY_STOCK,
    FILTER_BY_GENDER,
    SORT_BY_PRICE,
  } = actions;
  const sizes = products
    .map((product) => product.availableSizes)
    ?.flat(Infinity)
    .filter((size, ind, arr) => arr.lastIndexOf(size) === ind);

  const suitableFor = products
    .map((product) => product.suitableFor)
    .filter((res, ind, arr) => arr.lastIndexOf(res) === ind);

  const brands = products
    .map((product) => product.brand)
    .filter((b, ind, arr) => arr.lastIndexOf(b) === ind);

  return (
    <div className="rounded-sm min-w-[15rem] bg-white min-h-[calc(100vh-5rem)] pt-10 px-2">
      <p className="flex w-full justify-between items-center border-b-2  pb-2">
        <span className="font-semibold text-md">Filters</span>
        <button
          onClick={() => resetFilters(productDispatch)}
          className="text-sm bg-slate-100 px-2"
        >
          Clear
        </button>
      </p>
      <div className="flex justify-start items-center gap-2">
        <label htmlFor="low-to-high">
          <input
            type="radio"
            id="low-to-high"
            name="sort"
            checked={sortByPrice === "LOW_TO_HIGH"}
            onChange={() =>
              productDispatch({ type: SORT_BY_PRICE, payload: "LOW_TO_HIGH" })
            }
          />
          <span>Low To High</span>
        </label>
        <label htmlFor="high-to-low">
          <input
            type="radio"
            id="high-to-low"
            name="sort"
            checked={sortByPrice === "HIGH_TO_LOW"}
            onChange={() =>
              productDispatch({ type: SORT_BY_PRICE, payload: "HIGH_TO_LOW" })
            }
          />
          <span>High To Low</span>
        </label>
      </div>
      <label htmlFor="stock" className="mt-4 block">
        <input
          type="checkbox"
          id="stock"
          onChange={() =>
            productDispatch({
              type: FILTER_BY_STOCK,
              payload: filterByStock === "yes" ? "no" : "yes",
            })
          }
          checked={filterByStock === "yes"}
        />{" "}
        <span>Include Out Of Stock</span>{" "}
      </label>
      <div className="mt-4 pb-2 border-b-2">
        <p>Sizes</p>
        <div className="flex justify-start  items-center gap-10 w-full px-2">
          {sizes?.map((size) => (
            <label
              htmlFor={size}
              key={size}
              className=" flex justify-center gap-1 items-center"
            >
              <input
                type="checkbox"
                name="filterBySize"
                checked={filterBySize.includes(size)}
                onChange={(e) =>
                  productDispatch({ type: FILTER_BY_SIZE, payload: size })
                }
                id={size}
              />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mt-4 pb-2 border-b-2">
        <p>Brands</p>
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          {brands?.map((brand) => (
            <label
              htmlFor={brand}
              key={brand}
              className="flex justify-between px-2 items-center w-full"
            >
              <input
                type="checkbox"
                checked={filterByBrand.includes(brand)}
                id={brand}
                onChange={() =>
                  productDispatch({ type: FILTER_BY_BRAND, payload: brand })
                }
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p>Ideal For</p>
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          {suitableFor?.map((gender) => (
            <label
              htmlFor={gender}
              key={gender}
              className="flex justify-between px-2 items-center w-full"
            >
              <input
                checked={filterByGender.includes(gender)}
                onChange={() =>
                  productDispatch({ type: FILTER_BY_GENDER, payload: gender })
                }
                type="checkbox"
                id={gender}
              />
              <span>{gender}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
