/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* userr Page: https://www.creative-tim.com/userr/argon-dashboard-react
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

  const baseURL="http://localhost:8000/api/register";
  const Order = (props) => {
    const history = useHistory();
    const initialize={
        name:"",
        address:"",
        phone:"",
        email:"",
        password:"",
        CPassword:""
     };
     
     
    const [value, setvalue] = useState(initialize);
    //const [userrDetails, setuserrDetails] = useState(p);
    const[formValidation,setFormValidation]=useState([]);

    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setvalue({ ...value, [name]: value });
    };

    
    
    // const  handlePicInput=(event)=>{
    //   let p = event.target.files[0];
    //   formdata.append("userr_picture", p);
    //   console.log(formdata.get('userr_picture'));
    // }
    const _onSubmit= async(e)=>{
      setFormValidation([]);
      e.preventDefault();
      console.log(value.id)
     const userr={
        name:value.name,
        address:value.address,
        phone:value.phone,
        email:value.email,
        password:value.password,
        CPassword:value.CPassword
     }
     
    //  often forgets the file
    const formdata = new FormData();

     formdata.append('name',userr.name);
     formdata.append('address',userr.address);
     formdata.append('phone',userr.phone);
     formdata.append('email',userr.email);
     formdata.append('password',userr.password);
     formdata.append('CPassword',userr.CPassword);
       
            axios.post(baseURL, formdata)
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
            if(res.data.status=='success') history.push(`/signup`);
            }).catch((error) => {
            console.log(error)
            Swal.fire(
            'User Added'
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
                  
                    <h3 className="mb-0">Sign Up</h3>
                  
                    
                  </Col>
                  <Col className="text-right" xs="4">
                    
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                            

                  
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
                            Name: 
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="text"
                            name="Pyament_recive_no"
                            value={value.name}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.name}</span>
                        </FormGroup>
                      </Col>

                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Phone: 
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="text"
                            name="phone"
                            value={value.phone}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.phone}</span>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Address: 
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="text"
                            name="address"
                            value={value.address}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.address}</span>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Email: 
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="text"
                            name="email"
                            value={value.email}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.email}</span>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Password: 
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="text"
                            name="password"
                            value={value.password}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.password}</span>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Confirm Password: 
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            type="text"
                            name="CPassword"
                            value={value.CPassword}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.CPassword}</span>
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
                      Sign UP
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
  
  export default Order;
  