import axios from "axios";
import queryString from "query-string";

import { apiConfig } from ".";

export const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: apiConfig.apiKey,
  },
});
