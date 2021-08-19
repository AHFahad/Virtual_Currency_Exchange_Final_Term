// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import AdminLayout from "./layouts/Admin.js";
import SellerLayout from "./layouts/Seller.js";
import AuthLayout from "./layouts/Auth.js";
import AddAdmin from 'views/admin/createAdmin';
function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/seller" render={(props) => <SellerLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Redirect from="/" to="/auth/login" />
        {/* <Route path="/admin/addAdmin" component = {AddAdmin} /> */}
        <Redirect from="/" to="/admin/index" />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
