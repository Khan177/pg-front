const initialState = {
  contragentsData: [],
  loading: false,
  failure: false,
  currentContragent: {},
  currentContragentFailure: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTRAGENTS_REQUEST':
      return { ...state, loading: true };
    case 'GET_CONTRAGENTS_FAILURE':
      return { ...state, failure: true, loading: false };
    case 'GET_CONTRAGENTS_SUCCESS':
      return {
        ...state,
        contragentsData: action.payload,
        loading: false,
      };
    case 'GET_CONTRAGENT_SUCCESS':
      return { ...state, currentContragent: action.payload };
    case 'GET_CONTRAGENT_FAILURE':
      return { ...state, currentContragentFailure: true };
    case 'GET_CONTRAGENT_PROPS':
      return { ...state, currentContragent: { ...state.currentContragent, ...action.payload } };
    case 'UPDATE_CONTRAGENT_PROPS':
      return state = initialState;
    case 'RESET_CONTRAGENT_PROPS':
      return state = initialState;  
    default:
      return state;
  }
};
export default reducer;
