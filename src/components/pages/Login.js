import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {login} from "../../actions/auth";

const Login = () => {

    const {isLoggedIn} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(login());
    };

    if (isLoggedIn) {
        return (
            <div>
                <p>You are logged in.</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>Login to be able to secret page content.</p>
                <button
                    className="btn btn-primary"
                    onClick={onLogin}>
                    Login
                </button>
            </div>
        );
    }
};

export default Login;