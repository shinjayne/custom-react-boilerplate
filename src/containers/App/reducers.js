import {fromJS} from 'immutable';


import {CHANGE_THEME_BLACK, CHANGE_THEME_WHITE} from './consts';

// global setting state
const globalInitialState = fromJS(
    {
        theme_white : true,
    }
);
// Reducer for global setting state
export default function globalReducer(state = globalInitialState, action){
    switch (action.type) {
        case CHANGE_THEME_WHITE :
            return state.set('theme_white', true);
        case CHANGE_THEME_BLACK :
            return state.set('theme_white', false);
        default :
            return state ;
    }
}