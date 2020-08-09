import axios from "axios";

const baseUrl = "https://pg-back.herokuapp.com";

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
