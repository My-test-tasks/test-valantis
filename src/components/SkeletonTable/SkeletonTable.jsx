import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Divider, LinearProgress, Skeleton, Stack } from "@mui/material";
import { SKELETON } from "@/configs/skeleton";
import { ProductsTableHeader } from "@/components/ProductsTable/ProductsTableHeader";

import { FiltersHeader } from "../ProductsFilters/FiltersHeader";

const skeleton = Array(SKELETON.NUMBER_OF_LINES).fill(SKELETON.FILLER);

export const SkeletonTable = () => {
  return (
    <TableContainer component={Stack} spacing={2}>
      <LinearProgress />

      <ProductsTableHeader />

      <Stack
        direction="row"
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Stack spacing={2} width="233px">
          <FiltersHeader />

          <Skeleton variant="rounded" height={40} />
          <Skeleton variant="rounded" height={40} />
          <Skeleton variant="rounded" height={40} />
          <Skeleton variant="rounded" height={40} />
        </Stack>

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
            {skeleton.map((_, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Skeleton animation="wave" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton animation="wave" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton animation="wave" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton animation="wave" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </TableContainer>
  );
};
