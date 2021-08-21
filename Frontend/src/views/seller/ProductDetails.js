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
          
                  <h6 className="heading-small text-muted mb-4">Action:</h6>
  
                    <Link
                      color="primary"
                      className="btn btn-primary"
                      to={`/seller/edit/product/${productDetails.id}`}
                    >
                      Edit
                    </Link>
                
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
  