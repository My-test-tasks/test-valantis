import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBrandsQuery } from "@/api/brandsAPI";
import { STATUS } from "@/constants/status";

const initialState = {
  items: null,
  status: STATUS.IDLE,
};

export const getBrands = createAsyncThunk(
  "brands/getBrands",
  async (offset) => {
    const response = await getBrandsQuery();
    const result = new Set(response.data.result);

    const brands = [...result].map((brand) => {
      const label = brand ?? "Без бренда";

      return {
        label,
        brand,
      };
    });

    return brands;
  }
);

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.items = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const selectBrands = (state) => state.brands.items;
export const selectStatus = (state) => state.brands.status;

export default brandsSlice.reducer;
