import { ConstructionsService } from "../service/constructions.service";

export const getOutdoorFurnitureData = () => {
  const request = () => ({ type: "GET_CONSTRUCTIONS_REQUEST" });
  const success = (data) => ({
    type: "GET_CONSTRUCTIONS_SUCCESS",
    payload: data,
  });
  const failure = (err) => ({ type: "GET_CONSTRUCTIONS_FAILURE", error: err });
  return (dispatch) => {
    dispatch(request());
    ConstructionsService.get()
      .then((res) => dispatch(success(res.data)))
      .catch((err) => dispatch(failure(err)));
  };
};
