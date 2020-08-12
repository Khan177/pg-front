const rowKeys = [
  "code",
  "city",
  "postalCode",
  "district",
  "legalAddress",
  "cadastralNumber",
  "area",
];
const columns = [
  "Код",
  "Город",
  "Индекс",
  "Район",
  "Юридический адрес",
  "Кадастровый номер",
  "Площадь",
];
const formData = [
  "formCity",
  "formDistrict",
  "formLegalAddress",
  "formPostalCode",
  "formCadastralNumber",
  "formTarget",
  "formOrderNumber",
  "formStartDate",
  "formEndDate",
  "formArea",
  "formFormat",
  "formCommentary",
  "formAkimat",
  "formAct",
  "formStatusNon",
  "formStatus",
];
const fullColumns = [
  "city",
  "district",
  "legalAddress",
  "postalCode",
  "cadastralNumber",
  "target",
  "orderNumber",
  "startDate",
  "endDate",
  "area",
  "format",
  "commentary",
  "akimat",
  "act",
  "statusNon",
  "status",
];

const initialState = {
  loading: false,
  error: false,
  tableData: [],
  rowKeys: rowKeys,
  columns: columns,
  formCity: "",
  formDistrict: "",
  formLegalAddress: "",
  formMarkAddress: "",
  formPostalCode: "",
  formCadastralNumber: "",
  formTarget: "",
  formOrderNumber: "",
  formStartDate: "",
  formEndDate: "",
  formArea: "",
  formFormat: "",
  formCommentary: "",
  formAkimat: "",
  formAct: "",
  formStatusNon: "",
  formStatus: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LOCATIONS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_LOCATIONS_FAILURE":
      alert(action.payload);
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "GET_LOCATIONS_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        tableData: action.payload,
      };
    case "SET_FORM_CITY":
      return {
        ...state,
        formCity: action.payload,
      };
    case "SET_FORM_DISTRICT":
      return {
        ...state,
        formDistrict: action.payload,
      };
    case "SET_FORM_LEGALADDRESS":
      return {
        ...state,
        formLegalAddress: action.payload,
      };
    case "SET_FORM_MARKADDRESS":
      return {
        ...state,
        formMarkAddress: action.payload,
      };
    case "SET_FORM_POSTALCODE":
      return {
        ...state,
        formPostalCode: action.payload,
      };
    case "SET_FORM_CADASTRALNUMBER":
      return {
        ...state,
        formCadastralNumber: action.payload,
      };
    case "SET_FORM_TARGET":
      return {
        ...state,
        formTarget: action.payload,
      };
    case "SET_FORM_ORDERNUMBER":
      return {
        ...state,
        formOrderNumber: action.payload,
      };
    case "SET_FORM_STARTDATE":
      return {
        ...state,
        formStartDate: action.payload,
      };
    case "SET_FORM_ENDDATE":
      return {
        ...state,
        formEndDate: action.payload,
      };
    case "SET_FORM_AREA":
      return {
        ...state,
        formArea: action.payload,
      };
    case "SET_FORM_FORMAT":
      return {
        ...state,
        formFormat: action.payload,
      };
    case "SET_FORM_COMMENTARY":
      return {
        ...state,
        formCommentary: action.payload,
      };
    case "SET_FORM_AKIMAT":
      return {
        ...state,
        formAkimat: action.payload,
      };
    case "SET_FORM_ACT":
      return {
        ...state,
        formAct: action.payload,
      };
    case "SET_FORM_STATUSNON":
      return {
        ...state,
        formStatusNon: action.payload,
      };
    case "SET_FORM_STATUS":
      return {
        ...state,
        formStatus: action.payload,
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        formCity: "",
        formDistrict: "",
        formLegalAddress: "",
        formMarkAddress: "",
        formPostalCode: "",
        formCadastralNumber: "",
        formTarget: "",
        formOrderNumber: "",
        formStartDate: "",
        formEndDate: "",
        formArea: "",
        formFormat: "",
        formCommentary: "",
        formAkimat: "",
        formAct: "",
        formStatusNon: "",
        formStatus: "",
      };
    case "FILTER_TABLE":
      return {
        ...state,
        tableData: state.tableData.filter((row) => {
          let boo = true;
          formData.forEach((key, ind) => {
            if (
              state[key] &&
              !row[fullColumns[ind]].toLowerCase().includes(state[key])
            )
              boo = false;
          });
          return boo;
        }),
      };
    case "SET_FAST_SEARCH":
      return {
        ...state,
        tableData: state.tableData.filter((row) => {
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
        }),
      };
    default:
      return state;
  }
};
export default reducer;
