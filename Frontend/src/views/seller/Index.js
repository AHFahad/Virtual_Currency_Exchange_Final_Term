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
import { useState } from "react";
// node.js library that concatenates classes (strings)
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

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            
                        <form method="post">
                    <div class=" row align-items-center ">
                        <div class="col">
                            <div class="form-group">
                                <label>Starting Date</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                                    </div>
                                    <input class="form-control" type='date' name="start_date" value="" />
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <Label>Ending Date</Label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                                    </div>
                                    <input class="form-control" type='date' name="end_date" value=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <br/>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <input type='submit' class="btn btn-primary"value="Get"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

                </Col>
                {/* dashboad boxes */}



                
<div class="row mb-5">
    <div class="col-xl-3 col-md-4">
        <div class="card card-stats">
            
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h5 class="card-title text-uppercase text-muted mb-0">Processing Orders</h5>
                        <span class="h2 font-weight-bold mb-0"> $processingOrder </span>
                    </div>
                    <div class="col-auto">
                        <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                            <i class="ni ni-delivery-fast"></i>
                        </div>
                    </div>
                </div>
                <p class="mt-3 mb-0 text-sm">
                </p>
            </div>
        </div>
    </div>


        <div class="col-xl-3 col-md-4">
            <div class="card card-stats">
                
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="card-title text-uppercase text-muted mb-0">Completed Orders</h5>
                            <span class="h2 font-weight-bold mb-0"> $completedOrder </span>
                        </div>
                        <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i class="ni ni-check-bold"></i>
                            </div>
                        </div>
                    </div>
                    <p class="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>


            <div class="col-xl-3 col-md-4">
                <div class="card card-stats">
                   
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title text-uppercase text-muted mb-0">Cancelled Orders</h5>
                                <span class="h2 font-weight-bold mb-0"> $cancelledOrder </span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                    <i class="ni ni-scissors"></i>
                                </div>
                            </div>
                        </div>
                        <p class="mt-3 mb-0 text-sm">
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-4">
                <div class="card card-stats">
                    
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title text-uppercase text-muted mb-0">Total Earnings</h5>
                                <span class="h2 font-weight-bold mb-0"> $total  earnings </span>
                            </div>
                            <div class="col-auto">
                                <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                    <i class="ni ni-money-coins"></i>
                                </div>
                            </div>
                        </div>
                        <p class="mt-3 mb-0 text-sm">
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
        </Row>
      </Container>
    </>
  );
};

export default Index;
