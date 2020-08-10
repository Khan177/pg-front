import { instance } from './instance';

export const PartnersService = {
  get: () => instance.get('/partners'),
  getPartners: () => instance.get('/contragents'),
  post: (contragent) => instance.post('/partners', contragent),
  put: (contragent) => instance.put(`/partners/${contragent._id}`, contragent),
  getByID: (id) => instance.get(`/partners/${id}`),
};
