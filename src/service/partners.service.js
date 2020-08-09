import { instance } from "./instance";

export const PartnersService = {
  get: () => instance.get("/partners"),
  getPartners: () => instance.get("/contragents"),
};
