import { GET_USERS, UPDATE_USERS } from '../actions/actionTypes.js';

const initialState = {
    users: [],
    startCnt: document.body.clientWidth < 768 ? 3 : 6,
    currPage: document.body.clientWidth < 768 ? 1 : 2,
}

export default function getUsers(state = initialState, action) {
    switch(action.type) {
        case GET_USERS :
            return {
                users: action.payload,
                startCnt: document.body.clientWidth < 768 ? 3 : 6,
                currPage: document.body.clientWidth < 768 ? 1 : 2,
            }
        case UPDATE_USERS :
            return {
                users: [...state.users, ...action.payload],
                currPage: ++state.currPage
            }
        default:
            return state
    }
}