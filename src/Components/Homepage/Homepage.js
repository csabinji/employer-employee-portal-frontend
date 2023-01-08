import React from 'react';
import './Homepage.css';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../routes';

const Homepage = () => {
    const history = useHistory();

    const handleAdminLogin = () => {
        history.push(Routes.AdminLogin.path);
    };

    const handleEmployeeLogin = () => {
        history.push(`${Routes.Login.path}/employee`);
    };

    const handleEmployerLogin = () => {
        history.push(`${Routes.Login.path}/employer`);
    };
    return (
        <div className="homepage-container">
            <h1>Welcome to the Homepage</h1>
            <p>Please select one of the following options to login:</p>
            <button className="login-button" onClick={handleAdminLogin}>Admin</button>
            <button className="login-button" onClick={handleEmployerLogin}>Employer</button>
            <button className="login-button" onClick={handleEmployeeLogin}>Employee</button>
        </div>
    );
};

export default Homepage;