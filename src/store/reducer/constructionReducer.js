const initialState = {
  currentConstruction: {
    city: '',
    district: '',
    postalCode: '',
    owner: '',
    marketingAddress: '',
    legalAddress: '',
    dateOfCreation: new Date(),
    generalComment: '',
    familyConstruction: '',
    availabilityConstruction: '',
    subfamilyConstruction: '',
    model: '',
    availabilityLand: '',
    sides: [
      {
        format: '',
        side: '',
        advertisingSide: '',
        purposeSide: '',
        sizes: '',
        availabilitySide: '',
      },
    ],
    crew: '',
    generalInventoryNumber: '',
    constructionPhoneNumber: '',
    techProblem: '',
    techComment: '',
    connectionStatus: '',
    markup: '',
    bookkeepInventoryNumber: '',
    link: '',
    coordinates: '',
    isLightUp: '',
    code: '',
    responsible: '',
    manipulationType: '',
    informationBefore: '',
    informationAfter: '',
  },
};

const constructionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CURRENT_CONSTRUCTION':
      return { ...state, currentConstruction: action.payload };
    case 'GET_CONSTRUCTION_PROPS':
      return { ...state, currentConstruction: { ...state.currentConstruction, ...action.payload } };
    case 'UPDATE_CONSTRUCTION_PROPS':
      return (state = initialState);
    default:
      return state;
  }
};

export default constructionReducer;
