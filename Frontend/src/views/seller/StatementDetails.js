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
  import {Link} from "react-router-dom";
  import Header from "components/Headers/Header.js";
  import axios from "axios";
  import React, { useState, useEffect } from 'react';
  import _Table from 'components/Table.js'
  import ProductInfoTemplete from 'components/seller/ProductInfoTemplete.js'
  import { useParams  } from "react-router";
  import Swal from 'sweetalert2';
  import { useHistory } from "react-router-dom";

  const baseURL="http://localhost:8000/api/seller/statement/"
  const StatementDetails = (props) => {
    const {id:eid} = useParams();
    const history = useHistory();
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [orderDetails, setOrderDetails] = useState([]);
    const [avg_rating, setAvg_rating] = useState([]);

    const getData=async()=>{
      const response= await axios.get(baseURL+eid);
      setProductDetails(response.data.product);
      setOrderDetails(response.data.order);
    }

    useEffect(()=>{
      getData();
    }, []);
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
    //   setOrderDetails({ ...orderDetails, [name]: value });
    //   console.log(orderDetails);
    };

    const _onSubmit= async(e)=>{
      e.preventDefault();
    };
    const _delete=(e)=>{
     
    }
    
    


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
                    <h3 className="mb-0">Order Details</h3>
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
                <ProductInfoTemplete key={productDetails.id} {...productDetails} paymentMethods={paymentMethods}></ProductInfoTemplete>
                  

                <h6 className="heading-small text-muted mb-4">About the order:</h6>

                <div className="pl-lg-4"> 
                    <Row>
                        <Col lg="6">
                            <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                            >
                                Transaction NO:
                            </label>
                            { orderDetails.transection_no }
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
                             Seller Reply:
                          </label><br/>
                          { orderDetails.seller_reply }
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
                             Buyer Reply:
                          </label><br/>
                          { orderDetails.buyer_reply }
                        </FormGroup>
                      </Col> 
                      </Row>
                    
                    <Row>
                    <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                             Transection NO of Sender:
                          </label>
                          { orderDetails.transection_number_of_sender }
                        </FormGroup>
                      </Col>
                      
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                             Rating:
                          </label>
                          { orderDetails.rating?orderDetails.rating:" No Rating" }
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
                             Review:
                          </label>
                          { orderDetails.review?orderDetails.review:" No Review" }
                        </FormGroup>
                      </Col> 
                      </Row>
                      
                    
                  </div>

                  {/* form */}
                  
                  <h6 className="heading-small text-muted mb-4">Action:</h6> 
                    <Link
                      color="primary"
                      className="btn btn-danger"
                      to={`/seller/statements`}
                    >
                      back
                    </Link>  
              </CardBody>
            </Card>
          </Col>
        </Row>
        
          
        </Container>
      </>
    );
  };
  
  export default StatementDetails;
  