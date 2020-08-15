import { instance } from "./instance";

export const ConstructionsService = {
  getDistricts: () => instance.get("/districts"),
  get: () => instance.get("/constructions"),
  getByID: (id) => instance.get(`/constructions/${id}`),
  getCities: () => instance.get("/cities"),
  getPostalCodes: () => instance.get("/postcodes"),
  post: (construction) => instance.post("/constructions", construction),
  put: (construction) => instance.put(`/constructions/${construction._id}`, construction),
};
