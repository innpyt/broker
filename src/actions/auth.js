import {LOGIN_SUCCESS} from "./types";

export const login = () => (dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS
    });
};