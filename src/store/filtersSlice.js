import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  price: null,
  brand: null,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
      state.price = null;
      state.brand = null;
    },
    setPrice: (state, action) => {
      state.name = null;
      state.price = action.payload;
      state.brand = null;
    },
    setBrand: (state, action) => {
      state.name = null;
      state.price = null;
      state.brand = action.payload;
    },
    resetFilters: (state) => {
      state.name = null;
      state.price = null;
      state.brand = null;
    },
  },
});

export const { setName, setPrice, setBrand, resetFilters } =
  filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name;
export const selectPriceFilter = (state) => state.filters.price;
export const selectBrandFilter = (state) => state.filters.brand;

export default filtersSlice.reducer;
