const initialState = {
  projectsData: [],
  loading: false,
  failure: null,
  currentProject: {},
  currentProjectFailure: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS_REQUEST':
      return { ...state, loading: true };
    case 'GET_PROJECTS_FAILURE':
      return { ...state, failure: action.payload, loading: false };
    case 'GET_PROJECTS_SUCCESS':
      return {
        ...state,
        projectsData: action.payload,
        loading: false,
      };
    case 'GET_PROJECT_SUCCESS':
      return { ...state, currentProject: action.payload };
    case 'GET_PROJECT_FAILURE':
      return { ...state, currentProjectFailure: action.payload };
    case 'GET_PROJECT_PROPS':
      return { ...state, currentProject: { ...state.currentProject, ...action.payload } };
    case 'UPDATE_PROJECT_PROPS':
      return (state = initialState);
    case 'RESET_PROJECTS_PROPS':
      return (state = initialState);
    default:
      return state;
  }
};

export default reducer;
