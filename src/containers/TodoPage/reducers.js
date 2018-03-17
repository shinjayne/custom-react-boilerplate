import {fromJS, OrderedMap} from 'immutable';
import {combineReducers} from 'redux-immutable';

import {
    UPDATE_STAGED,
    INCREASE_K,
    INCREASE_KEY,
    ADD_TODO,
    REMOVE_TODO,
    REMOVE_ALL_TODO,
    CHANGE_FILTER,
    } from "./consts";

const stagedInitialState = fromJS(
    {
        content : null,
        idkey : 1
    }
);

function stagedReducer(state=stagedInitialState, action){
    switch (action.type){
        case UPDATE_STAGED :
            return state.set('content', action.content);
        case INCREASE_K :
            return state.set('idkey', state.get('idkey')+1);
        default :
            return state ;
    }
}
/*
const keyInitialState = fromJS({value : 1});
function keyReducer(state=keyInitialState, action) {
    switch (action.type){
        case INCREASE_KEY :
            return state.set('value',state.get('value')+1) ;
        default :
            return state;
    }
}
*/
const listInitialState = OrderedMap();

function listReducer(state=listInitialState, action) {
    switch (action.type){
        case ADD_TODO :
            return state.set(action.key, action.content);
        case REMOVE_TODO :
            return state.delete(action.key);
        case REMOVE_ALL_TODO :
                return state.clear();
        default :
            return state ;
    }
}

const filterInitialState = fromJS('ALL');

function filterReducer(state=filterInitialState, action){
    switch (action.type){
        case CHANGE_FILTER :
            return state.set(action.filter) ;
        default :
            return state;
    }
}

const combined = combineReducers({
    staged : stagedReducer,
    list : listReducer,
    filter : filterReducer,
});

export default combined ;
