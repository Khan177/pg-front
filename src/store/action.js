import axios from "../axois-api"
import {TAKE_INFO_INPUT_SUCCESS, TAKE_INFO_TABLE_ERROR, TAKE_INFO_TABLE_SUCCESS, TAKE_VALUE_INPUT} from "./actionTypes";

const fetchTableInfoSuccess = allTableInfo => {
    return {type: TAKE_INFO_TABLE_SUCCESS, allTableInfo}
}
const fetchTableInfoError = error => {
    return {type: TAKE_INFO_TABLE_ERROR, error}
}
export const takeValueInput = (name, value) => {
    return {type: TAKE_VALUE_INPUT, name, value};
};

export const fetchTableInfo = () => {
    return dispatch => {
        return axios.get('/table').then(res => {
            console.log(res.data)
            dispatch(fetchTableInfoSuccess(res.data))
        }).catch((error) =>{
            dispatch(fetchTableInfoError({
                error:"dateBase not found"
            }))
            console.log(error)
        })
    }
}
const fetchInputInfoSuccess = () => {
    return {type: TAKE_INFO_INPUT_SUCCESS}
}
export const PostInfoInput = (post) => {
    return dispatch => {
        return axios.post('/table', post).then(res => {
            console.log(res.data)
            dispatch(fetchInputInfoSuccess())
        }).catch((error) =>{
            dispatch(fetchTableInfoError({
                error:" error"
            }))
            console.log(error)
        })
    }
}