import axios from 'axios';
import { aventUrl } from './action.urls';
// import authHeader from '../services/auth-header';
import { CREATE_AVENT } from './types';

// const options = {
//     credentials: 'same-origin',
//     headers: authHeader()
// };

export const insertAvent = (avent) => async (dispatch) => {
    const response = await axios.post(aventUrl, avent);
    dispatch({
        type: CREATE_AVENT,
        payload: {
            message: response.data.message,
        },
    });
};
