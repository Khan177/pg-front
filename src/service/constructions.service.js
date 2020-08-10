import { instance } from "./instance";

export const ConstructionsService = {
  getDistricts: () => instance.get("/districts"),
  get: () => instance.get("/constructions"),
  getCities: () => instance.get("/cities"),
  getPostalCodes: () => instance.get("/postcodes"),
  post: (construction) => instance.post("/constructions", construction),
  put: (construction) => instance.put(`/constructions/${construction._id}`, construction),
};
