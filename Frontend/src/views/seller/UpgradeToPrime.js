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
// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    CardBody,
    FormGroup,
    Form,
    Input,
    Col,
    Button
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import axios from "axios";
  import React, { useState, useEffect } from 'react';
  import _Table from 'components/Table.js'
  import { useParams  } from "react-router";
  import Swal from 'sweetalert2';
  import { useHistory,Link } from "react-router-dom";

  const baseURL="http://localhost:8000/api/seller/prime";
  const UpgradeToPrime = (props) => {
  
    const history = useHistory();
    const initialize={
        package:"",
        payment_method:"",
        transection_no:"",
     };
     
    const [paymentDetails, setPaymentDetails] = useState(initialize);
    const[formValidation,setFormValidation]=useState([]);
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    
    
    const _onSubmit= async(e)=>{
      e.preventDefault();
     const payment={
        package:paymentDetails.package,
        payment_method:paymentDetails.payment_method,
        transection_no:paymentDetails.transection_no,
        }   
        console.log(payment)
        axios.post(baseURL,payment)
        .then((res) => {
        console.log(res.data)
        if(res.data.error==400){
          setFormValidation(res.data.errorData)
          console.log(res.data.errorData)
        }
        Swal.fire(
            res.data.msg,
            'You clicked the button!',
            res.data.status
        )
        if(res.data.status=='success') history.push(`/seller/index`);
        }).catch((error) => {
        console.log(error)
        Swal.fire(
        'somting went wrong',
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
          {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            
          </Col> */}
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                 
                     <h3 className="mb-0">Edit proudct</h3>
                 
                    
                  </Col>
                  <Col className="text-right" xs="4">
                    {/* <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                
                  <h6 className="heading-small text-muted mb-4">
                    Payment Details...
                  </h6>
                  


                  {/* form */}
                  
                  <Form
                  onSubmit={_onSubmit}
                  encType="multipart/form-data"
                  >
                  
                  
                  <div className="pl-lg-4">
                   
                 
                    <Row>
                     
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Select Package
                          </label>
                        <select  name="package" className="form-control" value={paymentDetails.package} onChange={handleInputChange}>
                            <option selected value='0'>none</option>
                            <option value="1">1 Month   900   Taka</option>
                            <option value="2">3 Month   2500  Taka</option>
                            <option value="3">6 Month   4700  Taka</option>
                            <option value="3">1 Year    9000  Taka</option>
                        </select>
                        <span className="text-danger">{formValidation.package}</span>

                        </FormGroup>
                      </Col>
                     
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Select Payment method
                          </label>
                         <select  name="payment_method" className="form-control" value={paymentDetails.payment_method} onChange={handleInputChange}>
                            <option selected value='0'>none</option>
                            <option value="1">Bikash</option>
                            <option value="2">Rocket</option>
                            <option value="3">Credit card</option>
                        </select>
                        <span className="text-danger">{formValidation.payment_method}</span>

                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Pay money to 02444...<br></br>
                            Input Transection Number
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-transection_no"
                            type="text"
                            name="transection_no"
                            value={paymentDetails.transection_no}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.transection_no}</span>

                        </FormGroup>
                      </Col>
                    </Row>
                   
                  </div>
                  
                  
                
                 
                    <Row className="align-items-center">
                  <Col xs="4">
                    <Button
                      color="primary"
                      type="submit" 
                    >
                      Pay
                    </Button>
                    <Link
                      color="danger"
                      className="btn btn-info"
                      to={`/seller/ssl/payment`}
                    >
                      Pay with SSLcommerz!!!
                    </Link>
                  </Col>
                </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
          
        </Container>
      </>
    );
  };
  
  export default UpgradeToPrime;
  