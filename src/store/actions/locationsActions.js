import { LocationsService } from "../../service/locations.service";

export const getLocationsData = () => {
  const request = () => ({ type: "GET_LOCATIONS_REQUEST" });
  const success = (data) => ({
    type: "GET_LOCATIONS_SUCCESS",
    payload: data,
  });
  const failure = (err) => ({ type: "GET_LOCATIONS_FAILURE", error: err });
  return (dispatch) => {
    dispatch(request());
    LocationsService.get()
      .then((res) => dispatch(success(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};

export const filterLocationsTable = () => {
  const request = () => ({ type: "GET_LOCATIONS_REQUEST" });
  const success = (data) => ({
    type: "GET_LOCATIONS_SUCCESS",
    payload: data,
  });
  console.log("hey");
  const failure = (err) => ({ type: "GET_LOCATIONS_FAILURE", error: err });
  return (dispatch) => {
    dispatch(request());
    LocationsService.get()
      .then((res) => dispatch(success(res.data)))
      .then((res) => dispatch({ type: "FILTER_TABLE" }))
      .catch((err) => dispatch(failure(err)));
  };
};
export const filterLocationsFastSearch = (fastSearch) => {
  const request = () => ({ type: "GET_LOCATIONS_REQUEST" });
  const success = (data) => ({
    type: "GET_LOCATIONS_SUCCESS",
    payload: data,
  });
  const failure = (err) => ({ type: "GET_LOCATIONS_FAILURE", error: err });
  return (dispatch) => {
    dispatch(request());
    LocationsService.get()
      .then((res) => {
        dispatch(success(res.data));
      })
      .then((res) => dispatch({ type: "SET_FAST_SEARCH", payload: fastSearch }))
      .catch((err) => dispatch(failure(err)));
  };
};
