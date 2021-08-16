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

  const baseURL="http://localhost:8000/api/seller/product/"
  const baseURLPost="http://localhost:8000/api/seller/product/";
  const OrderList = (props) => {
    const {id:eid} = useParams();
    const history = useHistory();
    const initialize={
        name:"",
        price:"",
        description:"",
        product_picture_upload:"",
        number_of_info:"",
        from_currency:"",
        To_currency:"",
        Pyament_recive_no:""
     };
     
    const [productDetails, setProductDetails] = useState(initialize);
    const[formValidation,setFormValidation]=useState([]);

    const getData=async()=>{
      const response= await axios.get(baseURL+eid+"/edit");
      setProductDetails(response.data.product);
    }

    useEffect(()=>{
      if(eid)getData();
    }, []);
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProductDetails({ ...productDetails, [name]: value });
    };

    
    
    // const  handlePicInput=(event)=>{
    //   let p = event.target.files[0];
    //   formdata.append("product_picture", p);
    //   console.log(formdata.get('product_picture'));
    // }
    const _onSubmit= async(e)=>{
      setFormValidation([]);
      e.preventDefault();
      console.log(productDetails.id)
     const product={
        name:productDetails.name,
        price:productDetails.price,
        description:productDetails.description,
        product_picture:productDetails.product_picture_upload,
        number_of_info:productDetails.number_of_info,
        from_currency:productDetails.from_currency,
        To_currency:productDetails.To_currency,
        Pyament_recive_no:productDetails.Pyament_recive_no
     }
     
    //  often forgets the file
    const formdata = new FormData();
    let imagefile = document.querySelector('#file-input');
    formdata.append("product_picture", imagefile.files[0]);
    console.log(formdata.get('product_picture'));


     formdata.append('name',product.name);
     formdata.append('price',product.price);
     formdata.append('description',product.description);
     formdata.append('number_of_info',product.number_of_info);
     formdata.append('from_currency',product.from_currency);
     formdata.append('To_currency',product.To_currency);
     formdata.append('Pyament_recive_no',product.Pyament_recive_no);
     console.log("test2"+formdata.get('product_picture'));
        if(eid){
            axios.post(baseURL+eid, formdata)
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
            if(res.data.status=='success') history.push(`/seller/product/${eid}`);
            }).catch((error) => {
            console.log(error)
            Swal.fire(
            'somting went wrong',
            'You clicked the button!',
            'error'
            )
            })

        }
        else{
            axios.post(baseURLPost, formdata)
            .then((res) => {
              console.log(res.data)
            if(res.data.error==400){
              setFormValidation(res.data.errorData)
              console.log(res.data.errorData)
            }
            console.log(res.data)
                Swal.fire(
                res.data.msg,
                'You clicked the button!',
                res.data.status
                )
                if(res.data.status=='success') history.push('/seller/product/index');
            }).catch((error) => {
            console.log(error)
            Swal.fire(
                'somting wenttt wrong',
                'You clicked the button!',
                'error'
            )
            })

        }
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
                  {
                      eid?<h3 className="mb-0">Edit proudct</h3>:<h3 className="mb-0">create proudct</h3>
                  }
                    
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
                  {
                      (eid&&productDetails.product_picture)?<Col lg='5'>
                      <img className="card-img-top" style={{ maxHeight:270 ,width:'auto'}} src={ (productDetails.product_picture)? "http://localhost:8000/"+productDetails.product_picture:'http://localhost:8000/seller/image/demo_product.jpg'}
                            alt="Card image cap"/>
                    </Col>:""
                  }
                 


                  {/* form */}
                  
                  <Form
                  onSubmit={_onSubmit}
                  encType="multipart/form-data"
                  >
                  
                  
                  <div className="pl-lg-4">
                    <Row>
                      {eid?<Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Order No: 
                          </label>
                          {productDetails.id}
                        </FormGroup>
                      </Col>:""
                  
                      }
                      
                    <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Uplaod photo: 
                          </label><br/>
                          <input type="file" id="file-input" name="product_picture_upload" className="mb-4" onChange={handleInputChange}  />
                          <span className="text-danger">{formValidation.old_password}</span>

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
                          <Input
                            className="form-control-alternative"
                            id="input-title"
                            type="text"
                            name="name"
                            value={productDetails.name}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.name}</span>

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
                          <Input
                            className="form-control-alternative"
                            id="input-price"
                            type="text"
                            name="price"
                            value={productDetails.price}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.price}</span>
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
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="text"
                            name="Pyament_recive_no"
                            value={productDetails.Pyament_recive_no}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.Pyament_recive_no}</span>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            From currency
                          </label>
                         <select  name="from_currency" className="form-control" value={productDetails.from_currency} onChange={handleInputChange}>
                            <option value="0">none</option>
                            <option value="1">Bkash</option>
                            <option value="2">Nagod</option>
                            <option value="3">Roket</option>
                            <option value="4">Mkash</option>
                            <option value="4">Ukash</option>
                            <option value="5">Gkash</option>
                            </select>
                        </FormGroup>
                      </Col>
                     
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            To currency
                          </label>
                         <select  name="To_currency" className="form-control" value={productDetails.To_currency} onChange={handleInputChange}>
                            <option value="0">none</option>
                            <option value="1">Bkash</option>
                            <option value="2">Nagod</option>
                            <option value="3">Roket</option>
                            <option value="4">Mkash</option>
                            <option value="4">Ukash</option>
                            <option value="5">Gkash</option>
                            </select>
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
                            what information you need from the buyer
                          </label>
                         <select  name="number_of_info" className="form-control" value={productDetails.number_of_info} onChange={handleInputChange}>
                            <option value="transection">Only Transection number</option>
                            <option value="phone">Transection number and phone number of money recive</option>
                            <option value="game_id">Transection and Game ID</option>
                            </select>
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
                                <Input
                                className="form-control-alternative"
                                placeholder="write ..."
                                rows="4"
                                type="textarea"
                                name="description"
                                value={productDetails.description}
                                onChange={handleInputChange}
                            />
                            <span className="text-danger">{formValidation.description}</span>
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
                      save
                    </Button>
                    <Link
                      color="danger"
                      className="btn btn-danger"
                      to={`/seller/product/${eid}`}
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
      </>
    );
  };
  
  export default OrderList;
  