import * as t from "../types";

const INTITAL_STATE = {
    photosList: [],
    loading : false,
};

export const photoReducer = (state =  INTITAL_STATE , action) => {
    switch (action.type) {
        case t.photos_start:
            return {
                ...state,
                loading: true,
            };
        case t.photos_success:
            return {
                ...state,
                photosList: action.payload,
                loading: false,
            };
        case t.photos_failed:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
