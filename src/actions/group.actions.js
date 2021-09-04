import axios from 'axios';
import { groupUrl } from './action.urls';
import authHeader from '../services/auth-header';
import {
    ALL_GROUPS,
    CREATE_GROUP,
    REQUEST_JOIN_GROUP,
    JOIN_GROUP,
    USER_GROUPS,
    CLEAR_GROUP_MESSAGE
} from './types';

const options = {
    credentials: 'same-origin',
    headers: authHeader()
};

export const getAllGroups = () => async (dispatch) => {
    const response = await axios.get(groupUrl, options);
    dispatch({
        type: ALL_GROUPS,
        payload: {
            allGroups: response.data,
        },
    });
};

export const insertGroup = (group) => async (dispatch) => {
    console.log(group);
    const response = await axios.post(groupUrl, group, options);
    dispatch({
        type: CREATE_GROUP,
        payload: {
            message: response.data.message,
        },
    });
};

export const requestJoinGroup = (uid, gid) => async (dispatch) => {
    const response = await axios.post(`${groupUrl}/request`, { uid, gid }, options);
    dispatch({
        type: REQUEST_JOIN_GROUP,
        payload: {
            message: response.data.message,
        },
    });
};

// export const requestJoinGroup = (uid, gid) => {
//     console.log(uid, gid);
//     return (dispatch) => {
//         console.log(uid, gid);
//         axios.post(groupUrl + '/request', { uid: uid, gid: gid })
//             .then(response => {
//                 console.log(response);
//                 dispatch({ type: REQUEST_JOIN_GROUP, payload: { message: response.data.message } });
//                 console.log("Join-group request added");
//                 console.log(response.data.message);
//             })
//             .catch(err => console.log(err));
//     }
// };

export const joinGroup = (uid, gid) => async (dispatch) => {
    console.log(uid, gid);
    const response = await axios.post(`${groupUrl}/join`, { uid, gid }, options);
    dispatch({
        type: JOIN_GROUP,
        payload: {
            message: response.data.message,
        },
    });
};

export const getUserGroups = (uid) => async (dispatch) => {
    console.log(uid);
    const response = await axios.get(`${groupUrl}/${uid}`, options);
    console.log("response");
    console.log(response.data.groups);
    dispatch({
        type: USER_GROUPS,
        payload: {
            userGroups: response.data.groups,
        },
    });
};

export const clearGroupMessage = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_GROUP_MESSAGE,
            payload: {
                message: '',
            },
        });
    }
}
// 60b1c51e972a803b980dd57e - group
// 60b1a365ccd2b83650f5e37d - user