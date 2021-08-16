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
  import { useHistory } from "react-router-dom";

  const baseURL="http://localhost:8000/api/seller/order/"
  const OrderList = (props) => {
    const {id:eid} = useParams();
    const history = useHistory();
    const [orderDetails, setOrderDetails] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const[formValidation,setFormValidation]=useState([]);
    const getData=async()=>{
      const response= await axios.get(baseURL+eid);
      setOrderDetails(response.data.order);
      setProductDetails(response.data.product);
    }

    useEffect(()=>{
      getData();
    }, []);
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setOrderDetails({ ...orderDetails, [name]: value });
      console.log(orderDetails);
    };

    const _onSubmit= async(e)=>{
      e.preventDefault();
     const order={
      transection_no:orderDetails.transection_no,
      seller_reply:orderDetails.seller_reply,
      status:orderDetails.status
     }

     axios.put(baseURL+eid, order)
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
        if(res.data.status=='success') history.push('/seller/orders');
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
                
                  <h6 className="heading-small text-muted mb-4">
                    Product information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Order No: 
                          </label>
                          {orderDetails.id}
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Product Title:
                          </label>
                          {productDetails.name}
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
                            price In Taka:
                          </label>
                          { orderDetails.price_on_selling_time }
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Amount/Quantity:
                          </label>
                          { orderDetails.amount }
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
                            Total price In Taka:
                          </label>
                          { orderDetails.amount*orderDetails.price_on_selling_time }
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Payment method:
                          </label>
                          Bikash
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
                            Payment recive NO:
                          </label>
                          { productDetails.Pyament_recive_no }
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
                            Product Desciption:
                          </label><br/>
                          { productDetails.description }
                        </FormGroup>
                      </Col>
                     
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Buyer provided information
                  </h6>
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
                          { orderDetails.transection_number_of_sender}
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
                          { orderDetails.buyer_reply}
                        </FormGroup>
                      </Col>
                     
                    </Row>
                    {orderDetails.phone_number?
                        <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            phone Number/recive number:
                          </label>
                          { orderDetails.phone_number}
                        </FormGroup>
                      </Col>
                     
                    </Row>:''
                    }
                    {orderDetails.game_id?
                        <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Game id:
                          </label>
                          { orderDetails.game_id}
                        </FormGroup>
                      </Col>
                     
                    </Row>:''
                    }
                    
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <Form
                  onSubmit={_onSubmit}
                  >
                  <h6 className="heading-small text-muted mb-4">Reply:</h6>
                  <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Transection NO:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="text"
                            name="transection_no"
                            value={orderDetails.transection_no}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                    <FormGroup>
                      <label> Give reply and information like transection no ,code ,if needed.</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="write ..."
                        rows="4"
                        type="textarea"
                        name="seller_reply"
                        value={orderDetails.seller_reply}
                        onChange={handleInputChange}
                      />
                      <span className="text-danger">{formValidation.seller_reply}</span>
                    </FormGroup>
                    </Col>
                    <Row className="align-items-center">
                  <Col xs="4">
                    <Button
                      color="primary"
                      type="submit" 
                      name='status'
                      value='completed'
                      onClick={handleInputChange}
                      
                    >
                      send
                    </Button>
                    <Button
                      color="danger"
                      type="submit" 
                      name='status'
                      value='cancelled'
                      onClick={handleInputChange}
                    >
                      Cancel
                    </Button>
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
  
  export default OrderList;
  