import {
    UPDATE_STAGED,
    INCREASE_K,
    INCREASE_KEY,
    ADD_TODO,
    REMOVE_TODO,
    REMOVE_ALL_TODO,
    CHANGE_FILTER
} from "./consts";

// action creators

export function updateStaged(content){
    return {
        type : UPDATE_STAGED,
        content : content,
    };
}
export function increaseK(){
    return {
        type : INCREASE_K
    } ;
}

/*
export function increaseKey(){
    return {
        type : INCREASE_KEY
    } ;
}
*/ 
export function addTodo(key,content){
    return {
        type : ADD_TODO,
        key : key,
        content : content,
    }
}

