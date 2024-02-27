import axios from "axios";
import { API } from "@/configs/api";
import { ACTIONS } from "@/constants/actions";
import { options } from "./options";
import { FILTERABLE_FIELD } from "@/constants/filterableFields";

export async function getFilteredIdsQuery(filterableField, filterableValue) {
  let value = filterableValue;

  if (filterableField === FILTERABLE_FIELD.PRICE) {
    value = Number(filterableValue);
  }

  if (filterableField === FILTERABLE_FIELD.BRAND) {
    value = filterableValue.brand;
  }

  try {
    const result = await axios.post(
      API.URL,
      {
        action: ACTIONS.FILTER,
        params: { [filterableField]: value },
      },
      options
    );

    return result;
  } catch (error) {
    console.log(error);
  }
}
