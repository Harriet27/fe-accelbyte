import * as t from "../types";

const INTITAL_STATE = {
    todoList: [],
    loading : false,
};

export const todoReducer = (state =  INTITAL_STATE , action) => {
    switch (action.type) {
        case t.todo_start:
            return {
                ...state,
                loading: true,
            };
        case t.todo_success:
            return {
                ...state,
                todoList: action.payload,
                loading: false,
            };
        case t.todo_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
