import dayjs from "dayjs";
import md5 from "md5";
import { API } from "@/configs/api";

const generateToken = () => {
  const timestamp = dayjs().format("YYYYMMDD");

  return md5(`${API.PASS}_${timestamp}`);
};

export const token = generateToken();
