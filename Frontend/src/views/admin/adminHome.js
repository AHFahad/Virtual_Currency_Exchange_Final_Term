/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/  
import React, { useState, useEffect } from 'react';

// node.js library that concatenates classNamees (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Label,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";
import axios from "axios";
const baseURL="http://localhost:8000/api/admin/home"

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  
    const [orders, setOrders] = useState([]);
    const [values, setValues] = useState([]);
    const [counter, setCounter] = useState([]);
    const [users, setUsers] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [buyers, setBuyers] = useState([]);
    const [primes, setPrimes] = useState([]);

    const getData=async()=>{
      const response= await axios.get(baseURL);
      setOrders(response.data.orders);
      setValues(response.data.values);
      setCounter(response.data.counter);
      setUsers(response.data.users);
      setAdmins(response.data.admins);
      setSellers(response.data.sellers);
      setBuyers(response.data.buyers);
      setPrimes(response.data.primes);
     
    }

    useEffect(()=>{
      getData();
    }, []);


  
return (
    <>
      <Header />
      {/* Page content */}
      <div className="text-center mt-5">
        <h1>Welcome Home</h1>
      </div>

      <div className="text-center mt-5">
        <h1><u>Site Overview</u></h1>
      </div>


      <Container className="mt-5" fluid>
        
        <div className="row mb-5">
        <div className="col-lg-3 md-6">
            <div className="card card-stats">
                
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Total traffic</h5>
                            <span className="h2 font-weight-bold mb-0">{ counter }</span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i className="ni ni-active-40"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 md-6">
            <div className="card card-stats">
                
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Total Users</h5>
                            <span className="h2 font-weight-bold mb-0">{ users }</span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                                <i className="ni ni-chart-pie-35"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 md-6">
            <div className="card card-stats">
                
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Sales Value</h5>
                            <span className="h2 font-weight-bold mb-0">{ values }</span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                                <i className="ni ni-money-coins"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>

        <div className="col-lg-3 md-6">
            <div className="card card-stats">
                
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Total Orders</h5>
                            <span className="h2 font-weight-bold mb-0">{ orders }</span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i className="ni ni-cart"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>
        
    </div>

    <div className="row mb-7">
        <div className="col-lg-3 md-6">
            <div className="card card-stats">
                
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Admins</h5>
                            <span className="h2 font-weight-bold mb-0">{ admins }</span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                <i className="ni ni-chart-pie-35"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 md-6">
            <div className="card card-stats">
                
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Buyers</h5>
                            <span className="h2 font-weight-bold mb-0">{ buyers }</span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                <i className="ni ni-chart-pie-35"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 md-6">
            <div className="card card-stats">
                
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Sellers</h5>
                            <span className="h2 font-weight-bold mb-0">{ sellers }</span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                <i className="ni ni-chart-pie-35"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 md-6">
            <div className="card card-stats">
                
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Prime Sellers</h5>
                            <span className="h2 font-weight-bold mb-0">{ primes }</span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                                <i className="ni ni-chart-pie-35"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>
    </div>
       
      </Container>
    </>
  );
};

export default Index;
