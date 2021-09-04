import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';
import History from './history.js';
import Routes from './routes';
import { AUTH_USER } from './actions/types';

import './style/style.css';
import { _PARSE_ as parse } from './debug';

import registerServiceWorker from './registerServiceWorker';

const token = localStorage.getItem('token');
// if we have a token, consider the user to be signed in
if (token) {
    if (parse) {
        const user = JSON.parse(localStorage.getItem('user'));
        // we need to update application state
        store.dispatch({ type: AUTH_USER, payload: { user: user } });
    }
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Router history={History} basename={'/'}>
                    <Switch>
                        <Routes />
                    </Switch>
                </Router>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
