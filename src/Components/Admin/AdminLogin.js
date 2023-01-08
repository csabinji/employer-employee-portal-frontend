import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { adminLogin } from '../../redux/actions/adminAction';
import { Routes } from '../../routes';
import './Admin.css';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const {
    success: successCreate,
    message: messageCreate,
    error: errorCreate,
  } = useSelector(state => state.adminLogin);

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = { email, password }
    dispatch(adminLogin(loginData));
  };

  useEffect(() => {
    if (successCreate && history.location.pathname !== Routes.AdminDashboard.path) {
      history.push(Routes.AdminDashboard.path);
    }
  }, [successCreate, history]);

  return (
    <div className="login-container">
      <h1 className="login-title">Admin Login</h1>
      {errorCreate ? <p className="error-message">{errorCreate}</p> : null}
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input className="input-field" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input className="input-field" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button className="login-button" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default AdminLogin;
