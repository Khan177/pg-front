const rowKeys = [
  "code",
  "city",
  "postalCode",
  "marketingAddress",
  "marketingAddress",
  "format",
  "coordinates",
];

const initialState = {
  outdoorFurnitureTableData: [],
  loading: false,
  failure: false,
  rowKeys: rowKeys,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONSTRUCTIONS_REQUEST":
      return { ...state, loading: true };
    case "GET_CONSTRUCTIONS_FAILURE":
      alert(action.error);
      return { ...state, failure: true, loading: false };
    case "GET_CONSTRUCTIONS_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        outdoorFurnitureTableData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
