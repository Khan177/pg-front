import { ConstructionsService } from "../service/constructions.service";

export const getOutdoorFurnitureData = () => {
  const request = () => ({ type: "GET_CONSTRUCTIONS_REQUEST" });
  const success = (data) => ({
    type: "GET_CONSTRUCTIONS_SUCCESS",
    payload: data,
  });
  console.log("hey");
  const failure = (err) => ({ type: "GET_CONSTRUCTIONS_FAILURE", error: err });
  return (dispatch) => {
    dispatch(request());
    ConstructionsService.get()
      .then((res) => dispatch(success(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};

export const getOutdoorFurnitureFiltered = (fastSearch) => {
  const request = () => ({ type: "GET_CONSTRUCTIONS_REQUEST" });
  const success = (data) => ({
    type: "GET_CONSTRUCTIONS_SUCCESS",
    payload: data,
  });
  console.log("hey");
  const failure = (err) => ({ type: "GET_CONSTRUCTIONS_FAILURE", error: err });
  return (dispatch) => {
    dispatch(request());
    ConstructionsService.get()
      .then((res) => {
        dispatch(success(res.data));
        dispatch({ type: "SET_FAST_SEARCH", payload: fastSearch });
      })
      .catch((err) => dispatch(failure(err)));
  };
};

export const getCities = () => {
  return (dispatch) => {
    ConstructionsService.getCities().then((res) =>
      dispatch({ type: "SET_CITIES", payload: res.data })
    );
  };
};
export const getDistricts = () => {
  return (dispatch) => {
    ConstructionsService.getDistricts().then((res) =>
      dispatch({ type: "SET_DISTRICTS", payload: res.data })
    );
  };
};
export const getPostalCodes = () => {
  return (dispatch) => {
    ConstructionsService.getPostalCodes().then((res) =>
      dispatch({ type: "SET_POSTALCODES", payload: res.data })
    );
  };
};
