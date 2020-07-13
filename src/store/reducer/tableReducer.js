import {TAKE_INFO_TABLE_ERROR, TAKE_INFO_TABLE_SUCCESS} from "../actionTypes";

const initialState = {
    tableInfo: [],
    error: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TAKE_INFO_TABLE_SUCCESS:
            return {...state, tableInfo: action.allTableInfo}
            case TAKE_INFO_TABLE_ERROR:
                console.log(action.error)
            return {...state, error: action.error}
        default:
            return state
    }
}
export default reducer
