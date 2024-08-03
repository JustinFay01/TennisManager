import axios, { handleError } from "./axios";
import { Coach, PaginatedResponse } from "../types";

const entityUrl = "/coaches";

export const getCoachesList = async () => {
  return axios.get<Coach[]>(`${entityUrl}/all`);
};
