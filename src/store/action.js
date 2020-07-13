import axios from "../axois-api"
import {TAKE_INFO_TABLE_ERROR, TAKE_INFO_TABLE_SUCCESS} from "./actionTypes";

const fetchTableInfoSuccess = allTableInfo => {
    return {type: TAKE_INFO_TABLE_SUCCESS, allTableInfo}
}
const fetchTableInfoError = error => {
    console.log(error)
    return {type: TAKE_INFO_TABLE_ERROR, error}
}

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