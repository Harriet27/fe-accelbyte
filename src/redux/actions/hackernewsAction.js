import Axios from "axios";
import * as t from "../types";
import * as url from "../url";

export const getAllTopStories = () => {
    return async dispatch => {
        dispatch({
            type: t.HACKERNEWS_START,
        });
        try {
            let res = await Axios.get(`${url.hackernews_api_url}/topstories.json?print=pretty`);
            dispatch({
                type: t.HACKERNEWS_SUCCESS,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: t.HACKERNEWS_FAILED,
            });
        }
    };
};
