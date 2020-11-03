import {
    LOGIN_SUCCESS
} from "../actions/types";

const initialState = {
    isLoggedIn: false
};

export default function (state = initialState, action) {
    const {type} = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            };
        default:
            return state;
    }
}