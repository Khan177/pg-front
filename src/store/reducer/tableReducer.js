import {
    TAKE_INFO_INPUT_SUCCESS,
    TAKE_INFO_TABLE_ERROR,
    TAKE_INFO_TABLE_SUCCESS,
    TAKE_VALUE_INPUT
} from "../actionTypes";

const initialState = {
    tableInfo: [],
    error: [],
    infoForm: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TAKE_INFO_TABLE_SUCCESS:
            return {...state, tableInfo: action.allTableInfo}
        case TAKE_INFO_INPUT_SUCCESS:
            return {...state, infoForm:[]}
        case TAKE_INFO_TABLE_ERROR:
            console.log(action.error)
            return {...state, error: action.error}
        case TAKE_VALUE_INPUT:
            return {...state, infoForm: {...state.infoForm, [action.name]: action.value}}
        default:
            return state
    }
}
export default reducer
