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

  const baseURL="http://localhost:8000/api/user/order/"
  const baseURLPost="http://localhost:8000/api/user/order/"
  const Order = (props) => {
    const {uid:uid} = useParams();
    const {id:pid} = useParams();
    console.log(uid);
    const history = useHistory();
    const initialize={
        product_id:pid,
        buyer_id:uid,
        price_on_selling_time:"",
        transection_number_of_sender:"",
        amount:"",
        buyer_reply:"",
        transection_no:""
     };
     const p = {
         id:"",
         name:"",
         price:"",
         Pyament_recive_no:""
     }
     
    const [OrderDetails, setOrderDetails] = useState(initialize);
    const [ProductDetails, setProductDetails] = useState(p);
    const[formValidation,setFormValidation]=useState([]);

    const getData=async()=>{
      const response= await axios.get(baseURL+uid+"/"+pid);
      console.log(response.data.product);
      setProductDetails(response.data.product);
    }
    
    useEffect(()=>{
     getData();
    }, []);
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setOrderDetails({ ...OrderDetails, [name]: value });
    };

    
    
    // const  handlePicInput=(event)=>{
    //   let p = event.target.files[0];
    //   formdata.append("product_picture", p);
    //   console.log(formdata.get('product_picture'));
    // }
    const _onSubmit= async(e)=>{
      setFormValidation([]);
      e.preventDefault();
      console.log(OrderDetails.id)
     const product={
        product_id:OrderDetails.product_id,
        buyer_id:OrderDetails.buyer_id,
        price_on_selling_time:ProductDetails.price,
        transection_no:OrderDetails.transection_no,
        amount:OrderDetails.amount,
        transection_number_of_sender:OrderDetails.transection_number_of_sender,
        buyer_reply:OrderDetails.buyer_reply
     }
     
    //  often forgets the file
    const formdata = new FormData();

     formdata.append('product_id',product.product_id);
     formdata.append('buyer_id',product.buyer_id);
     formdata.append('price_on_selling_time',product.price_on_selling_time);
     formdata.append('transection_no',product.transection_no);
     formdata.append('amount',product.amount);
     formdata.append('transection_number_of_sender',product.transection_number_of_sender);
     formdata.append('buyer_reply',product.buyer_reply);
       
            axios.post(baseURL+uid+"/"+pid, formdata)
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
            if(res.data.status=='success') history.push(`/buyer/order/${uid}/${pid}`);
            }).catch((error) => {
            console.log(error)
            Swal.fire(
            'Order Added'
            )
            }) 

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
                  
                    <h3 className="mb-0">Order</h3>
                  
                    
                  </Col>
                  <Col className="text-right" xs="4">
                    
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                
                  <h6 className="heading-small text-muted mb-4">
                    Product information
                  </h6>              

                  
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
                            htmlFor="input-username"
                          >
                            Product ID: 
                          </label>
                           {ProductDetails.id}
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
                         {ProductDetails.name}
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
                         {ProductDetails.price}
        
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
                        {ProductDetails.Pyament_recive_no}
                
                        </FormGroup>
                      </Col>
                      
                    </Row>
                   
                  </div>
                  
                  <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Transaction No:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-title"
                            type="text"
                            name="transection_no"
                            value={OrderDetails.transection_no}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.transection_no}</span>

                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Phone No:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-title"
                            type="text"
                            name="transection_number_of_sender"
                            value={OrderDetails.transection_number_of_sender}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.transection_number_of_sender}</span>

                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Reply:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-title"
                            type="text"
                            name="buyer_reply"
                            value={OrderDetails.buyer_reply}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.buyer_reply}</span>

                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Amount:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-title"
                            type="text"
                            name="amount"
                            value={OrderDetails.amount}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.amount}</span>

                        </FormGroup>
                      </Col>
                  
                
                 
                    <Row className="align-items-center">
                  <Col xs="4">
                    <Button
                      color="primary"
                      type="submit" 
                    >
                      Order
                    </Button>
                    <Link
                      color="danger"
                      className="btn btn-danger"
                      to={`/buyer/index`}
                    >
                      Back
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
  
  export default Order;
  