import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { selectProducts } from "@/store/productsSlice";
import { ProductsTableHeader } from "./ProductsTableHeader";
import { ProductsPagination } from "@/components/ProductsPagination";
import { Divider, Stack } from "@mui/material";
import { ProductsFilters } from "../ProductsFilters";
import { selectIsPaginationVisible } from "@/store/paginationSlice";

export const ProductsTable = () => {
  const products = useSelector(selectProducts);
  const isPaginationVisible = useSelector(selectIsPaginationVisible);

  return (
    <TableContainer component={Stack} spacing={2}>
      <ProductsTableHeader />

      <Stack
        direction="row"
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <ProductsFilters />

        <Stack spacing={2} width="90%">
          {isPaginationVisible && <ProductsPagination />}

          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Название</TableCell>
                <TableCell align="right">Цена</TableCell>
                <TableCell align="right">Бренд</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.id}
                  </TableCell>
                  <TableCell align="right">{product.product}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.brand}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {isPaginationVisible && <ProductsPagination />}
        </Stack>
      </Stack>
    </TableContainer>
  );
};
