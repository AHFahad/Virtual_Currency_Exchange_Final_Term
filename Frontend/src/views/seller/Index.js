 
import React, { useState, useEffect } from 'react';


import classnames from "classnames";
import Chart from "chart.js";

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
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`};
const baseURL="http://localhost:8000/api/seller/dashboard";

const Index = (props) => {

  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  
    const [processingOrder, setProcessingOrder] = useState([]);
    const [completedOrder, setCompletedOrder] = useState([]);
    const [cancelledOrder, setCancelledOrder] = useState([]);
    const [start_date, setStart_date] = useState([]);
    const [end_date, setEnd_date] = useState([]);
    const [total_earning, setTotal_earning] = useState([]);
    const [date, setDate] = useState({start_date:"",end_date:""});
    const getData=async()=>{
      const response= await axios.get(baseURL);
      localStorage.setItem("id",response.data.user.id);
      setProcessingOrder(response.data.processingOrder);
      setCompletedOrder(response.data.completedOrder);
      setCancelledOrder(response.data.cancelledOrder);
      setDate({start_date:response.data.start_date,end_date:response.data.end_date});
      setTotal_earning(response.data.total_earning);
      
     
    }

    useEffect(()=>{
      getData();
    }, []);




  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setDate({ ...date, [name]: value });
  };

  const _onSubmit= async(e)=>{
    e.preventDefault();
    const _date={
        start_date:date.start_date,
        end_date:date.end_date
    }
    console.log(_date);
   axios.post(baseURL,_date)
   .then((res) => {
     console.log(res.data)
     setProcessingOrder(res.data.processingOrder);
      setCompletedOrder(res.data.completedOrder);
      setCancelledOrder(res.data.cancelledOrder);
      setDate({start_date:res.data.start_date,end_date:res.data.end_date});
      setTotal_earning(res.data.total_earning);
      Swal.fire(
        res.data.msg,
        'You clicked the button!',
        res.data.status
      )
   }).catch((error) => {
     console.log(error)
     Swal.fire(
      'somting wen wrong',
      'You clicked the button!',
      'error'
    )
   })
   
  };




  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            
                        <form method="post" onSubmit={_onSubmit}>
                    <div className=" row align-items-center ">
                        <div className="col">
                            <div className="form-group">
                                <label>Starting Date</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                                    </div>
                                    <input className="form-control" type='date' name="start_date" defaultShow={date.start_date} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <Label>Ending Date</Label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="ni ni-calendar-grid-58"></i></span>
                                    </div>
                                    <input className="form-control" type='date' name="end_date" defaultShow={date.end_date} onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <br/>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <input type='submit' className="btn btn-primary"value="Get"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

                </Col>
                {/* dashboad boxes */}



                
<div className="row mb-5">
    <div className="col-xl-3 col-md-4">
        <div className="card card-stats">
            
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">Processing Orders</h5>
                        <span className="h2 font-weight-bold mb-0"> {processingOrder} </span>
                    </div>
                    <div className="col-auto">
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                            <i className="ni ni-delivery-fast"></i>
                        </div>
                    </div>
                </div>
                <p className="mt-3 mb-0 text-sm">
                </p>
            </div>
        </div>
    </div>


        <div className="col-xl-3 col-md-4">
            <div className="card card-stats">
                
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">Completed Orders</h5>
                            <span className="h2 font-weight-bold mb-0"> {completedOrder} </span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                <i className="ni ni-check-bold"></i>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-0 text-sm">
                    </p>
                </div>
            </div>
        </div>


            <div className="col-xl-3 col-md-4">
                <div className="card card-stats">
                   
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Cancelled Orders</h5>
                                <span className="h2 font-weight-bold mb-0"> {cancelledOrder} </span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                    <i className="ni ni-scissors"></i>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-4">
                <div className="card card-stats">
                    
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Total Earnings</h5>
                                <span className="h2 font-weight-bold mb-0"> {total_earning} </span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                    <i className="ni ni-money-coins"></i>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 mb-0 text-sm">
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
