import productJSON from "../products.json";
import { actions } from "./product-actions";

const {
  FILTER_BY_SIZE,
  FILTER_BY_BRAND,
  FILTER_BY_STOCK,
  FILTER_BY_GENDER,
  SORT_BY_PRICE,
  RESET_FILTERS,
} = actions;

export const productsInitialState = {
  products: productJSON.products,
  filterBy: {
    filterBySize: [],
    filterByBrand: [],
    filterByStock: "no",
    filterByGender: [],
    sortByPrice: "",
  },
};

export const productsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_BY_BRAND:
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          filterByBrand: state.filterBy.filterByBrand.includes(payload)
            ? state.filterBy.filterByBrand.filter((brand) => brand !== payload)
            : [...state.filterBy.filterByBrand, payload],
        },
      };
    case FILTER_BY_GENDER:
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          filterByGender: state.filterBy.filterByGender.includes(payload)
            ? state.filterBy.filterByGender.filter(
                (gender) => gender !== payload
              )
            : [...state.filterBy.filterByGender, payload],
        },
      };
    case FILTER_BY_SIZE:
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          filterBySize: state.filterBy.filterBySize.includes(payload)
            ? state.filterBy.filterBySize.filter((size) => size !== payload)
            : [...state.filterBy.filterBySize, payload],
        },
      };
    case FILTER_BY_STOCK:
      return {
        ...state,
        filterBy: { ...state.filterBy, filterByStock: payload },
      };
    case RESET_FILTERS:
      return {
        ...productsInitialState,
      };
    case SORT_BY_PRICE:
      return {
        ...state,
        filterBy: { ...state.filterBy, sortByPrice: payload },
      };
    default:
      return state;
  }
};

export const resetFilters = (dispatch) => {
  dispatch({ type: RESET_FILTERS });
};

export const filterProducts = (products, filters) => {
  const { filterByGender, filterBySize, filterByBrand, filterByStock } =
    filters;
  return products
    .filter(({ suitableFor }) =>
      filterByGender?.length > 0 ? filterByGender.includes(suitableFor) : true
    )
    .filter(({ unitsAvailable }) =>
      filterByStock === "yes"
        ? unitsAvailable >= 0
        : filterByStock === "no"
        ? unitsAvailable > 0
        : true
    )
    .filter(({ availableSizes }) =>
      filterBySize.length > 0
        ? availableSizes.some((size) => filterBySize.includes(size))
        : true
    )
    .filter(({ brand }) =>
      filterByBrand.length > 0 ? filterByBrand.includes(brand) : true
    );
};

export const sortProducts = (products, sortBy) => {
  return sortBy === "LOW_TO_HIGH"
    ? products.sort((a, b) => a.discountPrice - b.discountPrice)
    : sortBy === "HIGH_TO_LOW"
    ? products.sort((a, b) => b.discountPrice - a.discountPrice)
    : products;
};
