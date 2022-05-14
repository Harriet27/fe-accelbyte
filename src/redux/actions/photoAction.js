import Axios from "axios";
import * as t from "../types";
import * as url from "../url";

export const getAllPhotos = () => {
    return async dispatch => {
        dispatch({
            type: t.photos_start,
        });
        try {
            let res = await Axios.get(`${url.todo_api_url}/photos`);
            dispatch({
                type: t.photos_success,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: t.photos_failed,
            });
        }
    };
};