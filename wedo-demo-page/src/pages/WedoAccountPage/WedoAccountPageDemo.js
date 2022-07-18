// import PropTypes from 'prop-types';
// import Dashboard from '../Dashboard/Dashboard';
// import Login from '../Login/Login';
// import Preferences from '../Preferences/Preferences';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';



const WedoAccountPageDemo = () => {

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};
export default WedoAccountPageDemo;
