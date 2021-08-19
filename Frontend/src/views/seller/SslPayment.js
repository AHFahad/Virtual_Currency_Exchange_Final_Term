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
  axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`};
  const baseURL="http://localhost:8000/api/pay";
  const SslPayment = (props) => {
    
    const history = useHistory();
    const initialize={
        total_amount:"900",
     };
     
    const [paymentDetails, setPaymentDetails] = useState(initialize);
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    
    
    const _onSubmit= async(e)=>{
      e.preventDefault();
      
     const payment={
        total_amount:paymentDetails.total_amount,
        }   

        console.log(payment+"2")
        axios.get(baseURL,payment)
        .then((res) => {
        console.log(res.data)
        Swal.fire(
            res.data.msg,
            'You clicked the button!',
            res.data.status
        )
        // history.push(`/seller/index`);
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
                  // onSubmit={_onSubmit}
                  encType="multipart/form-data"
                  action={"http://localhost:8000/api/pay/"+localStorage.getItem('id')}
                  method="POST"
                  >
                  
                  
                  <div className="pl-lg-4">
                   
                 
                    <Row>
                     
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Select total_amount
                          </label>
                        <select  name="total_amount" id="total_amount" className="form-control" value={paymentDetails.total_amount} onChange={handleInputChange}>
                            <option value="900" selected>1 Month   900   Taka</option>
                            <option value="2500">3 Month   2500  Taka</option>
                            <option value="4700">6 Month   4700  Taka</option>
                            <option value="9000">1 Year    9000  Taka</option>
                        </select>
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
                      to={`/seller/index`}
                    >
                      Cancel
                    </Link>
                  </Col>
                </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
          
        </Container>
        
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
      </>
    );
  };
  
  export default SslPayment;
  