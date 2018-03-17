import { createSelector } from 'reselect';

const getTodo = (state)=> state.get('todo') ;

const getFilter = createSelector(
    getTodo,
    (todo)=>todo.get('filter')
);

const getList = createSelector(
    getTodo,
    (todo)=>todo.get('list')
);

const getStaged = createSelector(
    getTodo,
    (todo) => todo.get('staged').get('content')
);

const getID = createSelector(
    getTodo,
    (todo) => todo.get('staged').get('idkey')
);
/*
const makeGetKey = () =>  createSelector(
    getTodo,
    (todo)=> {todo.get('key').get('value'); console.log(todo.get('key').get('value'));}
);
*/
const getFilteredList = createSelector(
    [getList, getFilter],
    (list, filter)=> {
        switch(filter) {
            case 'ALL' :
                return list;
            default :
                return list;
        }
    }
) ;

export {getStaged, getFilteredList, getID} ;