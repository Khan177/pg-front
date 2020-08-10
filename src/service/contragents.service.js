import { instance } from './instance';

export const ContragentsService = {
  get: () => instance.get('/partners'),
  post: (contragent) => instance.post('/partners', contragent),
  put: (contragent) => instance.put(`/partners/${contragent._id}`, contragent),
  getByID: (id) => instance.get(`/partners/${id}`),
};
