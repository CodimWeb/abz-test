import {
    GET_USERS,
    UPDATE_USERS
} from './actionTypes.js'

export const getUsers = (payload) => {
    return {
        type: GET_USERS,
        payload: payload
    }
}

export const updateUsers = (payload) => {
    return {
        type: UPDATE_USERS,
        payload: payload
    }
}