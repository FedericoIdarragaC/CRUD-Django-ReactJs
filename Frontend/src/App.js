import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";

import {EmpresaAdd} from './components/EmpresaAdd';
import {EmpresaActualizar} from './components/EmpresaActualizar'
import {EmpresaList} from './components/EmpresaList'

import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark p-2">
        <a href="/" className="navbar-brand">
          Empresas
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link exact to={"/add/"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container m-10">
        <Switch>
          <Route exact path={["/", "/empresas"]} component={EmpresaList} />
          <Route exact path="/add/" component={EmpresaAdd} />
          <Route path="/empresa/:id/update/" component={EmpresaActualizar} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
