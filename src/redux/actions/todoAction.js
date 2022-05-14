import Axios from "axios";
import * as t from "../types";
import * as url from "../url";

export const getAllTodos = () => {
    return async dispatch => {
        dispatch({
            type: t.todo_start,
        });
        try {
            let res = await Axios.get(`${url.todo_api_url}/todos`);
            dispatch({
                type: t.todo_success,
                payload: res.data,
            });
        } catch {
            dispatch({
                type: t.todo_failed,
            });
        }
    };
};