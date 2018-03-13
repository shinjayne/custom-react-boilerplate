import {fromJS} from 'immutable';
import {combineReducers} from 'redux-immutable';

import {CHANGE_THEME_BLACK, CHANGE_THEME_WHITE} from 'consts';

// global setting state
const globalInitialState = fromJS(
    {
        theme_white : true,
    }
);
// Reducer for global setting state
function globalReducer(state = globalInitialState, action){
    switch (action.type) {
        case CHANGE_THEME_WHITE :
            return state.set()
    }
}