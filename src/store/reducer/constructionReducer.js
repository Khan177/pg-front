const initialState = {
  constructionsData: [],
  loading: false,
  currentConstruction: {
    dateOfCreation: (new Date()).toString(),
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
    // city: '',
    // district: '',
    // postalCode: '',
    // owner: '',
    // marketingAddress: '',
    // legalAddress: '',
    // dateOfCreation: (new Date()).toString(),
    // generalComment: '',
    // familyConstruction: '',
    // availabilityConstruction: '',
    // subfamilyConstruction: '',
    // model: '',
    // availabilityLand: '',
    // sides: [
    //   {
    //     format: '',
    //     side: '',
    //     advertisingSide: '',
    //     purposeSide: '',
    //     sizes: '',
    //     availabilitySide: '',
    //   },
    // ],
    // crew: '',
    // generalInventoryNumber: '',
    // constructionPhoneNumber: '',
    // techProblem: '',
    // techComment: '',
    // connectionStatus: '',
    // markup: '',
    // bookkeepInventoryNumber: '',
    // link: '',
    // coordinates: '',
    // isLightUp: '',
    // code: '',
    // responsible: '',
    // manipulationType: '',
    // informationBefore: '',
    // informationAfter: '',
  },
  currentConstructionFailure: null,
};

const constructionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONSTRUCTION_REQUEST':
      return { ...state, loading: true };
    case 'GET_CONSTRUCTION_SUCCESS':
      return { ...state, loading: false, currentConstruction: action.payload };
    case 'GET_CONSTRUCTION_FAILURE':
      return { ...state, currentConstructionFailure: action.payload };
    case 'GET_CONSTRUCTION_PROPS':
      return { ...state, currentConstruction: { ...state.currentConstruction, ...action.payload } };
    case 'UPDATE_CONSTRUCTION_PROPS':
      return (state = initialState);
    case 'PUT_CONSTRUCTION_FAILURE':
      return { ...state, currentLocationFailure: action.payload };
    case 'POST_CONSTRUCTION_FAILURE':
      return { ...state, currentLocationFailure: action.payload };
    case 'RESET_CURRENT_CONSTRUCTION':
      return (state = initialState);
    default:
      return state;
  }
};

export default constructionReducer;
