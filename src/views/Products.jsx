import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "@/store/productsSlice";
import { selectStatus } from "@/store/productsSlice";
import { ProductsTable } from "@/components/ProductsTable";
import { SkeletonTable } from "@/components/SkeletonTable";
import { STATUS } from "@/constants/status";
import { useEffect } from "react";
import { PAGINATION } from "@/configs/pagination";
import { selectCurrentPage } from "@/store/paginationSlice";
import { setPaginationVisible } from "@/store/paginationSlice";

export const Products = () => {
  const status = useSelector(selectStatus);
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    const offset = (currentPage - 1) * PAGINATION.LIMIT;

    dispatch(getProducts(offset));
    dispatch(setPaginationVisible(true));
  }, [currentPage]);

  if (status === STATUS.ERROR) {
    const offset = (currentPage - 1) * PAGINATION.LIMIT;

    dispatch(getProducts(offset));
    dispatch(setPaginationVisible(true));
  }

  if (status === STATUS.LOADING) {
    return <SkeletonTable />;
  }

  return <ProductsTable />;
};
