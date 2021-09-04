import axios from 'axios';
import History from '../history.js';
import { userUrl } from './action.urls';
import {
    ADD_AVAIL_SUCCESS
} from './types';

export const insertAvail = (avail) => {
    console.log(avail);
    return (dispatch) => {
        axios.post(`${userUrl}/avails`, { avail })
            .then(response => {

                dispatch({ type: ADD_AVAIL_SUCCESS, payload: { message: response.data.message } });

                History.push('/');

            }).catch(() => {
                console.log('Add Avail Error');
            });
    };
};
