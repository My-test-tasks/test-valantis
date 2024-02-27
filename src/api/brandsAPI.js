import axios from "axios";
import { API } from "@/configs/api";
import { ACTIONS } from "@/constants/actions";
import { options } from "./options";

export async function getBrandsQuery() {
  try {
    const result = await axios.post(
      API.URL,
      {
        action: ACTIONS.GET_FIELDS,
        params: { field: "brand" },
      },
      options
    );

    return result;
  } catch (error) {
    console.log(error);
  }
}
