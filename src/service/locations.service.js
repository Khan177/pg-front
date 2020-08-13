import { instance } from "./instance";

export const LocationsService = {
  get: () => instance.get("/projects"),
};
