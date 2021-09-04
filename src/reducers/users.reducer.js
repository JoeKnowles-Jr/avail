import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    USER_DASH,
    ALL_USERS
} from '../actions/types';
import { _PARSE_ as parse } from '../debug';

const token = localStorage.getItem("token");
const userString = localStorage.getItem("user");
let user = null;
if (token) {
    if(parse) {user = JSON.parse(userString);}
}

const initialState =
{
    authenticated: (user !== null),
    user: user,
    allUsers: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, user: action.payload.user, error: '', authenticated: true }
        case UNAUTH_USER:
            return { ...state, user: null, authenticated: false }
        case AUTH_ERROR:
            return { ...state, user: null, error: action.payload }
        case USER_DASH:
            return { ...state, user: action.payload.user, error: '' }
        case ALL_USERS:
            return { ...state, allUsers: action.payload.allUsers }
        default:
            return state;
    }
};
