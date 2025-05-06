import axios from "axios";

const apiServer = import.meta.env.VITE_API_SERVER;

export const CommonAPI = axios.create({
  baseURL: apiServer,
});