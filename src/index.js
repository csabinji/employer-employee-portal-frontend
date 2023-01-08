import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Components/Homepage/Homepage';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store";
import { Route } from 'react-router-dom';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDashboard from './Components/Admin/AdminDashboard';
import { Routes } from './routes';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Route path="/" exact component={Homepage} />
      <Route path={Routes.AdminLogin.path} component={AdminLogin} />
      <Route path={Routes.AdminDashboard.path} component={AdminDashboard} />
      {/* <Route path="/login/employee" component={Login} /> */}
      {/* <Route path="/login/employer" component={Login} /> */}
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);