const initialState = {
  locationsData: [],
  loading: false,
  currentLocation: {},
  currentLocationFailure: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOCATION_REQUEST':
      return { ...state, loading: true };
    case 'GET_LOCATION_SUCCESS':
      return { ...state, loading: false, currentLocation: action.payload };
    case 'GET_LOCATION_FAILURE':
      return { ...state, currentLocationFailure: action.payload };
    case 'GET_LOCATION_PROPS':
      return { ...state, currentLocation: { ...state.currentLocation, ...action.payload } };
    case 'PUT_LOCATION_FAILURE':
      return { ...state, currentLocationFailure: action.payload };
    case 'POST_LOCATION_FAILURE':
      return { ...state, currentLocationFailure: action.payload };
    case 'RESET_CURRENT_LOCATION':
      return (state = initialState);
    default:
      return state;
  }
};

export default reducer;
