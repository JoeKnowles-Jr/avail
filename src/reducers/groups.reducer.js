import {
    ALL_GROUPS,
    CREATE_GROUP,
    REQUEST_JOIN_GROUP,
    JOIN_GROUP,
    USER_GROUPS,
    CLEAR_GROUP_MESSAGE
} from '../actions/types';

const initialState = {
    allGroups: null,
    userGroups: null,
    message: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_GROUPS:
            return { ...state, allGroups: action.payload.allGroups };
        case CREATE_GROUP:
            return { ...state, message: action.payload.message };
        case REQUEST_JOIN_GROUP:
            return { ...state, message: action.payload.message };
        case JOIN_GROUP:
            return { ...state, message: action.payload.message };
        case USER_GROUPS:
            return { ...state, userGroups: action.payload.userGroups };
        case CLEAR_GROUP_MESSAGE:
            return { ...state, message: '' };
        default:
            return state;
    }
}