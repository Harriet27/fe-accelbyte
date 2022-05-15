import * as t from "../types";

const INTITAL_STATE = {
    topStoriesList: [],
    topStoryDetail: [],
    loading : false,
};

export const hackernewsReducer = (state =  INTITAL_STATE , action) => {
    switch (action.type) {
        case t.HACKERNEWS_START:
            return {
                ...state,
                loading: true,
            };
        case t.HACKERNEWS_SUCCESS:
            return {
                ...state,
                topStoriesList: action.payload,
                loading: false,
            };
        case t.HACKERNEWS_DETAIL:
            return {
                ...state,
                topStoryDetail: action.payload,
                loading: false,
            };
        case t.HACKERNEWS_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
