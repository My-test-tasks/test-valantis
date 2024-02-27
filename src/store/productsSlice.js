import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIdsQuery, getItemsQuery } from "@/api/productsAPI";
import { STATUS } from "@/constants/status";
import { withoutDoubles } from "@/utils/withoutDoubles";
import { getFilteredIdsQuery } from "@/api/filtersAPI";

const initialState = {
  items: [],
  status: STATUS.IDLE,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (offset) => {
    const responseIds = await getIdsQuery(offset);
    const ids = responseIds.data.result;

    const responseItems = await getItemsQuery(ids);
    const items = withoutDoubles(responseItems.data.result);

    return items;
  }
);

export const getFilteredProducts = createAsyncThunk(
  "products/getFilteredProducts",
  async ({ filterableField, value }) => {
    const responseIds = await getFilteredIdsQuery(filterableField, value);
    const ids = responseIds.data.result;

    const responseItems = await getItemsQuery(ids);
    const items = withoutDoubles(responseItems.data.result);

    return items;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      })
      .addCase(getFilteredProducts.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getFilteredProducts.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.items = action.payload;
      })
      .addCase(getFilteredProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const selectProducts = (state) => state.products.items;
export const selectStatus = (state) => state.products.status;

export default productsSlice.reducer;
