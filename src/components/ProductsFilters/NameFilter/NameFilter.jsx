import { IconButton, Stack, TextField } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTERABLE_FIELD } from "@/constants/filterableFields";
import { setPaginationVisible } from "@/store/paginationSlice";
import { getFilteredProducts } from "@/store/productsSlice";
import { selectNameFilter, setName } from "@/store/filtersSlice";

export const NameFilter = () => {
  const nameFilterValue = useSelector(selectNameFilter) ?? "";
  const [value, setValue] = useState(nameFilterValue);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      getFilteredProducts({ filterableField: FILTERABLE_FIELD.PRODUCT, value })
    );

    dispatch(setName(value));

    dispatch(setPaginationVisible(false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <TextField
          label="Название"
          variant="outlined"
          size="small"
          value={value}
          onChange={handleChange}
        />

        <IconButton color="secondary" type="submit">
          <FilterAltOutlinedIcon />
        </IconButton>
      </Stack>
    </form>
  );
};
