import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Components/Homepage/Homepage';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Homepage />
  </HashRouter>,
  document.getElementById("root")
);