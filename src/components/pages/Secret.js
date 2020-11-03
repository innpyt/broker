import React from 'react';
import {useSelector} from "react-redux";

const Secret = () => {
    const {isLoggedIn} = useSelector(state => state.auth);

    if (isLoggedIn) {
        return (
            <div>
                <h3>List of Secrets you shouldn't see if not logged in</h3>
                <ul>
                    <li>Secret</li>
                    <li>Secret</li>
                    <li>Secret</li>
                </ul>
            </div>
        );
    }

    return <p>Please Login to see this content</p>

};

export default Secret;