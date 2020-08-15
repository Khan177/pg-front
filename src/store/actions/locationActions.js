import { LocationsService } from '../../service/locations.service';

export const getLocationsData = () => {
  const request = () => ({ type: 'GET_LOCATIONS_REQUEST' });
  const success = (data) => ({
    type: 'GET_LOCATIONS_SUCCESS',
    payload: data,
  });
  const failure = (err) => ({ type: 'GET_LOCATIONS_FAILURE', error: err });
  return (dispatch) => {
    dispatch(request());
    LocationsService.get()
      .then((res) => dispatch(success(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};

export const getCurrentLocation = (id) => {
  const request = () => ({ type: 'GET_LOCATION_REQUEST' });
  const success = (data) => ({
    type: 'GET_LOCATION_SUCCESS',
    payload: data,
  });
  const failure = (err) => ({ type: 'GET_LOCATION_FAILURE', payload: err });
  return (dispatch) => {
    dispatch(request());
    LocationsService.getByID(id)
      .then((res) => dispatch(success(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};

export const getLocationProps = (key, value) => {
  return { type: 'GET_LOCATION_PROPS', payload: { [key]: value } };
};

export const updateLocationProps = (values) => (dispatch) => {
  LocationsService.put(values)
    .then(() => dispatch(getLocationsData()))
    .catch((err) => ({ type: 'PUT_LOCATION_FAILURE', payload: err }));
};

export const addLocation = (values) => (dispatch) => {
  LocationsService.post(values)
    .then(() => dispatch(getLocationsData()))
    .catch((err) => ({ type: 'POST_LOCATION_FAILURE', payload: err }));
};

export const resetCurrentLocation = () => {
  return { type: 'RESET_CURRENT_LOCATION' };
};
