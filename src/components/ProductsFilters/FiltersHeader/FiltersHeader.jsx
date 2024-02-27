import { Toolbar, Typography } from "@mui/material";

export const FiltersHeader = () => {
  return (
    <Toolbar>
      <Typography sx={{ flex: "1 1 100%" }} variant="h6">
        Фильтры
      </Typography>
    </Toolbar>
  );
};
