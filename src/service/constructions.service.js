import { instance } from "./instance";

export const ConstructionsService = {
  get: () => instance.get("/constructions"),
  post: (construction) => instance.post("/constructions", construction),
  put: (construction) => instance.put(`/constructions/${construction._id}`, construction),
};
