import axios from "axios";

const baseUrl = "http://pg-back.herokuapp.com";

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
