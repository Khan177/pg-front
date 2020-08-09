const rowKeys = [
  "code",
  "city",
  "postalCode",
  "marketingAddress",
  "marketingAddress",
  "format",
  "coordinates",
  "isLightUp",
];

const initialState = {
  outdoorFurnitureTableData: [],
  loading: false,
  failure: false,
  rowKeys: rowKeys,
  filterCity: "",
  filterDistrict: "",
  filterPostalCode: "",
  filterMarketingAddress: "",
  filterLegalAddress: "",
  filterCode: "",
  filterInventory: "",
  filterFormat: "",
  filterIsLightUp: "",
  filterCoordinates: "",
  fastSearch: "",
  formCities: [],
  formDistricts: [],
  formPostalCodes: [],
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
    case "SET_FILTER_CITY":
      return {
        ...state,
        filterCity: action.payload,
      };
    case "SET_FILTER_DISTRICT":
      console.log(action.payload);
      return {
        ...state,
        filterDistrict: action.payload,
      };
    case "SET_FILTER_POSTALCODE":
      return {
        ...state,
        filterPostalCode: action.payload,
      };
    case "SET_FILTER_ADDRESSMARK":
      console.log(action.payload);
      return {
        ...state,
        filterMarketingAddress: action.payload,
      };
    case "SET_FILTER_ADDRESSLEGAL":
      return {
        ...state,
        filterCity: action.payload,
      };
    case "SET_FILTER_CODE":
      return {
        ...state,
        filterCode: action.payload,
      };
    case "SET_FILTER_INVENTORY":
      return {
        ...state,
        filterInventory: action.payload,
      };
    case "SET_FILTER_FORMAT":
      return {
        ...state,
        filterFormat: action.payload,
      };
    case "SET_FILTER_ISBURNING":
      return {
        ...state,
        filterIsLightUp: action.payload,
      };
    case "SET_FILTER_COORDINATES":
      return {
        ...state,
        filterCoordinates: action.payload,
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        filterCity: "",
        filterDistrict: "",
        filterPostalCode: "",
        filterMarketingAddress: "",
        filterLegalAddress: "",
        filterCode: "",
        filterInventory: "",
        filterFormat: "",
        filterIsLightUp: "",
        filterCoordinates: "",
      };
    case "FILTER_OUTDOOR_TABLE":
      console.log("YA USTAL");
      return {
        ...state,
        outdoorFurnitureTableData: state.outdoorFurnitureTableData.filter(
          (row) => {
            let boo = true;
            console.log(state.filterDistrict, row.district);
            if (
              state.filterCity &&
              !row.city.toLowerCase().includes(state.filterCity)
            )
              boo = false;
            if (
              state.filterDistrict &&
              !row.district.toLowerCase().includes(state.filterDistrict)
            )
              boo = false;
            if (
              state.filterPostalCode &&
              !row.postalCode.toLowerCase().includes(state.filterPostalCode)
            )
              boo = false;
            if (
              state.filterMarketingAddress &&
              !row.marketingAddress
                .toLowerCase()
                .includes(state.filterMarketingAddress)
            )
              boo = false;
            if (
              state.filterLegalAddress &&
              !row.legalAddress.toLowerCase().includes(state.filterLegalAddress)
            )
              boo = false;
            if (
              state.filterCode &&
              !row.code.toLowerCase().includes(state.filterCode)
            )
              boo = false;
            if (
              state.filterInventory &&
              !row.inventory.toLowerCase().includes(state.filterInventory)
            )
              boo = false;
            if (
              state.filterFormat &&
              !row.format.toLowerCase().includes(state.filterFormat)
            )
              boo = false;
            if (
              state.filterIsLightUp &&
              !row.isLighUp.toLowerCase().includes(state.filterIsLightUp)
            )
              boo = false;
            if (
              state.filterCoordinates &&
              !row.coordinates.toLowerCase().includes(state.filterCoordinates)
            )
              boo = false;
            return boo;
          }
        ),
      };
    case "SET_FAST_SEARCH":
      return {
        ...state,
        outdoorFurnitureTableData: state.outdoorFurnitureTableData.filter(
          (row) => {
            for (let key in row) {
              if (
                row[key]
                  .toString()
                  .toLowerCase()
                  .includes(action.payload.toLowerCase())
              )
                return true;
            }
            return false;
          }
        ),
      };
    case "SET_CITIES":
      return {
        ...state,
        formCities: action.payload,
      };
    case "SET_DISTRICTS":
      return {
        ...state,
        formDistricts: action.payload,
      };
    case "SET_POSTALCODES":
      return {
        ...state,
        formPostalCodes: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
