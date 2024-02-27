import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import brandsReducer from "./brandsSlice";
import paginationReducer from "./paginationSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    brands: brandsReducer,
    pagination: paginationReducer,
    filters: filtersReducer,
  },
});
