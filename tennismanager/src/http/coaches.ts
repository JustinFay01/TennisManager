import axios from "./axios";
import { Coach } from "../types";
const entityUrl = "/coaches";

export const getCoachesList = async () => {
  return axios.get<Coach[]>(`${entityUrl}/all`);
};
