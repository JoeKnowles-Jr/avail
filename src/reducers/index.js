import { combineReducers } from 'redux';
import { reducer as userReducer } from './users.reducer';
import { reducer as groupsReducer } from './groups.reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    auth: userReducer,
    group: groupsReducer
});

export default rootReducer;
