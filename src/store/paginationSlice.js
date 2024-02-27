import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIdsQuery } from "@/api/productsAPI";
import { STATUS } from "@/constants/status";
import { PAGINATION } from "@/configs/pagination";

const initialState = {
  status: STATUS.IDLE,
  visible: true,
  currentPage: 1,
  pagesAmount: 0,
};

export const getPagesAmount = createAsyncThunk(
  "pagination/getPagesAmount",
  async () => {
    const response = await getIdsQuery();
    const idsAmount = response.data.result.length;
    const pagesAmount = Math.ceil(idsAmount / PAGINATION.LIMIT);

    return pagesAmount;
  }
);

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,

  reducers: {
    setPaginationVisible: (state, action) => {
      state.visible = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPagesAmount.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getPagesAmount.fulfilled, (state, action) => {
        state.status = STATUS.IDLE;
        state.pagesAmount = action.payload;
      })
      .addCase(getPagesAmount.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const { setCurrentPage, setPaginationVisible } = paginationSlice.actions;

export const selectPagesAmount = (state) => state.pagination.pagesAmount;
export const selectCurrentPage = (state) => state.pagination.currentPage;
export const selectIsPaginationVisible = (state) => state.pagination.visible;

export default paginationSlice.reducer;
