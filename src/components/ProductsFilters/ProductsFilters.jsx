import { Button, Stack } from "@mui/material";
import { FiltersHeader } from "./FiltersHeader";
import { NameFilter } from "./NameFilter/NameFilter";
import { PriceFilter } from "./PriceFilter/PriceFilter";
import { BrandFilter } from "./BrandFilter";
import { useDispatch, useSelector } from "react-redux";
import { setPaginationVisible } from "@/store/paginationSlice";
import { getProducts } from "@/store/productsSlice";
import { selectCurrentPage } from "@/store/paginationSlice";
import { PAGINATION } from "@/configs/pagination";
import { resetFilters } from "@/store/filtersSlice";

export const ProductsFilters = () => {
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  const handleReset = () => {
    const offset = (currentPage - 1) * PAGINATION.LIMIT;

    dispatch(getProducts(offset));
    dispatch(setPaginationVisible(true));
    dispatch(resetFilters());
  };
  return (
    <Stack spacing={2}>
      <FiltersHeader />

      <NameFilter />

      <PriceFilter />

      <BrandFilter />

      <Button variant="outlined" onClick={handleReset}>
        Сбросить
      </Button>
    </Stack>
  );
};
