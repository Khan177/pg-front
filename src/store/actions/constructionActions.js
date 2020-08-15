import { ConstructionsService } from '../../service/constructions.service';

export const getOutdoorFurnitureData = () => {
  const request = () => ({ type: 'GET_CONSTRUCTIONS_REQUEST' });
  const success = (data) => ({
    type: 'GET_CONSTRUCTIONS_SUCCESS',
    payload: data,
  });
  const failure = (err) => ({ type: 'GET_CONSTRUCTIONS_FAILURE', error: err });
  return (dispatch) => {
    dispatch(request());
    ConstructionsService.get()
      .then((res) => dispatch(success(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};

export const getCurrentConstruction = (id) => {
  const request = () => ({ type: 'GET_CONSTRUCTION_REQUEST' });
  const success = (data) => ({
    type: 'GET_CONSTRUCTION_SUCCESS',
    payload: data,
  });
  const failure = (err) => ({ type: 'GET_CONSTRUCTION_FAILURE', payload: err });
  return (dispatch) => {
    dispatch(request());
    ConstructionsService.getByID(id)
      .then((res) => dispatch(success(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};

export const getConstructionProps = (key, value) => {
  return { type: 'GET_CONSTRUCTION_PROPS', payload: { [key]: value } };
};

export const updateConstructionProps = (values) => (dispatch) => {
  ConstructionsService.put(values)
    .then(() => dispatch(getOutdoorFurnitureData()))
    .catch((err) => ({ type: 'PUT_CONSTRUCTION_FAILURE', payload: err }));
};

export const addConstruction = (values) => (dispatch) => {
  ConstructionsService.post(values)
    .then(() => dispatch(getOutdoorFurnitureData()))
    .catch((err) => ({ type: 'POST_CONSTRUCTION_FAILURE', payload: err }));
};

export const resetCurrentConstruction = () => {
  return { type: 'RESET_CURRENT_CONSTRUCTION' };
};
