import { LocationService } from '../../service/location.service';

export const getProjectsData = () => {
  const request = () => ({ type: 'GET_PROJECTS_REQUEST' });
  const success = (data) => ({
    type: 'GET_PROJECTS_SUCCESS',
    payload: data,
  });
  const failure = (err) => ({ type: 'GET_PROJECTS_FAILURE', payload: err });
  return (dispatch) => {
    dispatch(request());
    LocationService.get()
      .then((res) => dispatch(success(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};
