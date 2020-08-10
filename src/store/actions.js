import { ConstructionsService } from '../service/constructions.service';
import { ContragentsService } from '../service/contragents.service';

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

export const getContragentsData = () => {
  const request = () => ({ type: 'GET_CONTRAGENTS_REQUEST' });
  const success = (data) => ({
    type: 'GET_CONTRAGENTS_SUCCESS',
    payload: data,
  });
  const failure = (err) => ({ type: 'GET_CONTRAGENTS_FAILURE', error: err });
  return (dispatch) => {
    dispatch(request());
    ContragentsService.get()
      .then((res) => dispatch(success(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};

export const getContragentData = (id) => {
  const contragent = (data) => ({ type: 'GET_CONTRAGENT_SUCCESS', payload: data });
  const failure = (err) => ({ type: 'GET_CONTRAGENT_FAILURE', error: err });
  return (dispatch) => {
    ContragentsService.getByID(id)
      .then((res) => dispatch(contragent(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};

export const sendContragentValues = (key, value) => {
  console.log({ [key]: value })
  return { type: 'GET_CONTRAGENT_PROPS', payload: { [key]: value } };
};

export const updateContragent = (values) => {
  ContragentsService.put(values).then((res) => console.log(res));
  return { type: 'UPDATE_CONTRAGENT_PROPS' };
};

export const resetContragentValues = () => {
  return { type: 'RESET_CONTRAGENT_PROPS' };
};

export const getCurrentConstruction = (data) => {
  return { type: 'GET_CURRENT_CONSTRUCTION', payload: data };
};

export const sendValues = (key, value) => {
  return { type: 'GET_CONSTRUCTION_PROPS', payload: { [key]: value } };
};

export const updateConstruction = (values) => {
  ConstructionsService.put(values).then((res) => console.log(res));
  return { type: 'UPDATE_CONSTRUCTION_PROPS' };
};
