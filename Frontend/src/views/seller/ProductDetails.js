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

  const baseURL="http://localhost:8000/api/seller/product/"
  const ProductDetails = (props) => {
    const {id:eid} = useParams();
    const history = useHistory();
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [avg_rating, setAvg_rating] = useState([]);

    const getData=async()=>{
      const response= await axios.get(baseURL+eid);
      console.log(response.data.payment_methods[1]);
      setPaymentMethods(response.data.payment_methods);
      setProductDetails(response.data.product);
      setAvg_rating(response.data.avg_rating);
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
     const order={
    //   transection_no:orderDetails.transection_no,
    //   seller_reply:orderDetails.seller_reply,
    //   status:orderDetails.status
     }

     axios.put(baseURL+eid, order)
     .then((res) => {
       console.log(res.data)
        Swal.fire(
          res.data.msg,
          'You clicked the button!',
          res.data.status
        )
        history.push('/seller/orders');
     }).catch((error) => {
       console.log(error)
       Swal.fire(
        'somting wen wrong',
        'You clicked the button!',
        'error'
      )
     })
     
    };
    const _delete=(e)=>{
      e.preventDefault();
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          axios.delete(baseURL+eid)
     .then((res) => {
       console.log(res.data)
        Swal.fire(
          res.data.msg,
          'You clicked the button!',
          res.data.status
        )
        history.push('/seller/product/index');
     }).catch((error) => {
       console.log(error)
       Swal.fire(
        'somting wen wrong',
        'You clicked the button!',
        'error'
      )
     })
          // Swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
        }
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
                  



                <div className="pl-lg-4">                 
                    <Row>
                      <Col lg="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Average Rating:
                          </label><br/>
                          { avg_rating }
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  {/* form */}
                  <Form
                  onSubmit={_onSubmit}
                  >
                  <h6 className="heading-small text-muted mb-4">Action:</h6>
                 
                      
                   
                  
                    <Link
                      color="primary"
                      className="btn btn-primary"
                      to={`/seller/edit/product/${productDetails.id}`}
                    >
                      Edit
                    </Link>
                    
                  
                
                </Form>
                <Button
                      color="danger"
                      onClick={_delete}
                    >
                      delete
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
          
        </Container>
      </>
    );
  };
  
  export default ProductDetails;
  