import {
  Autocomplete,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTERABLE_FIELD } from "@/constants/filterableFields";
import { setPaginationVisible } from "@/store/paginationSlice";
import { getFilteredProducts } from "@/store/productsSlice";
import { selectBrandFilter, setPrice } from "@/store/filtersSlice";
import { STATUS } from "@/constants/status";
import { getBrands } from "@/store/brandsSlice";
import { selectBrands, selectStatus } from "@/store/brandsSlice";
import { setBrand } from "@/store/filtersSlice";

export const BrandFilter = () => {
  const brandFilterValue = useSelector(selectBrandFilter);
  const brandsStatus = useSelector(selectStatus);
  const brands = useSelector(selectBrands) ?? [];

  const [value, setValue] = useState(brandFilterValue);

  const loading = brandsStatus === STATUS.LOADING;

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(getBrands());
  };

  const handleChange = (_, value) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      getFilteredProducts({ filterableField: FILTERABLE_FIELD.BRAND, value })
    );

    dispatch(setBrand(value));

    dispatch(setPaginationVisible(false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <Autocomplete
          loading={loading}
          loadingText={
            <CircularProgress
              color="inherit"
              size={20}
              sx={{ marginLeft: "40%" }}
            />
          }
          disablePortal
          options={brands}
          size="small"
          fullWidth
          value={value}
          onOpen={handleOpen}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} label="Бренд" />}
        />

        <IconButton color="secondary" type="submit">
          <FilterAltOutlinedIcon />
        </IconButton>
      </Stack>
    </form>
  );
};
