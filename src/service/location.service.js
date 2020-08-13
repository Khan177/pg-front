import { instance } from './instance';

export const LocationService = {
  get: () => instance.get('/projects'),
  post: (project) => instance.post('/projects', project),
  put: (project) => instance.put(`/projects/${project._id}`, project),
  getByID: (id) => instance.get(`/projects/${id}`),
};
