import { useDispatch, useSelector } from "react-redux";
import { getPagesAmount, selectPagesAmount } from "@/store/paginationSlice";
import { Pagination } from "@mui/material";
import { useEffect } from "react";
import { setCurrentPage } from "@/store/paginationSlice";
import { selectCurrentPage } from "@/store/paginationSlice";

export const ProductsPagination = () => {
  const pagesAmount = useSelector(selectPagesAmount);
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  const handleChange = (event, page) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    dispatch(getPagesAmount());
  }, []);

  return (
    <Pagination
      count={pagesAmount}
      page={currentPage}
      variant="outlined"
      color="primary"
      size="medium"
      showFirstButton
      showLastButton
      onChange={handleChange}
      sx={{ alignSelf: "center" }}
    />
  );
};
