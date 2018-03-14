import {fromJS} from 'immutable';
import {combineReducers} from 'redux-immutable';

import globalReducer from './containers/App/reducers';


export default function createCombinedReducer(){
    return combineReducers({
        global : globalReducer,
    })
}




