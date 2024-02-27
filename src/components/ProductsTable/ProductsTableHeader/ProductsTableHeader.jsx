import { Toolbar, Typography } from "@mui/material";

export const ProductsTableHeader = () => {
  return (
    <Toolbar>
      <Typography sx={{ flex: "1 1 100%" }} variant="h4">
        Список товаров
      </Typography>
    </Toolbar>
  );
};
