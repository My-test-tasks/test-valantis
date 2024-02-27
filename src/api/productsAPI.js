import axios from "axios";
import { API } from "@/configs/api";
import { ACTIONS } from "@/constants/actions";
import { PAGINATION } from "@/configs/pagination";
import { options } from "./options";

export async function getIdsQuery(offset) {
  const params =
    typeof offset == "number" ? { offset, limit: PAGINATION.LIMIT } : {};

  try {
    const result = await axios.post(
      API.URL,
      {
        action: ACTIONS.GET_IDS,
        params,
      },
      { ...options }
    );

    return result;
  } catch (error) {
    console.error(error.message);
  }
}

export const getItemsQuery = async (ids) => {
  try {
    const result = await axios.post(
      API.URL,
      {
        action: ACTIONS.GET_ITEMS,
        params: {
          ids,
        },
      },
      { ...options }
    );

    return result;
  } catch (error) {
    console.error(error.message);
  }
};
