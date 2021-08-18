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

  const baseURL="http://localhost:8000/api/seller/profile/update/password";
  const ChangePassword = (props) => {
    const history = useHistory();
    const initialize={
        old_password:"",
        new_password:"",
        confirm_new_password:"",
     };
     
    const [passwordDetails, setPasswordDetails] = useState(initialize);
    const[formValidation,setFormValidation]=useState([]);


    useEffect(()=>{
    }, []);
    const formdata = new FormData();
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPasswordDetails({ ...passwordDetails, [name]: value });
    };

    
    
    
    const _onSubmit= async(e)=>{
      e.preventDefault();
      if(passwordDetails.new_password==passwordDetails.confirm_new_password){
         
     const product={
        old_password:passwordDetails.old_password,
        new_password:passwordDetails.new_password,
        confirm_new_password:passwordDetails.confirm_new_password,
     }
     console.log(product);
       
        axios.post(baseURL, product)
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
        if(res.data.status=='success') history.push(`/seller/profile`);
        }).catch((error) => {
        console.log(error)
        Swal.fire(
        'somting wentt wrong',
        'You clicked the button!',
        'error'
        )
        }) 
      }
      else{
        Swal.fire(
            'new and confirm password is not same',
            'You clicked the button!',
            'error'
            )
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
                      <h3 className="mb-0">Password...</h3>
                  }
                    
                  </Col>
                  <Col className="text-right" xs="4">
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>

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
                            htmlFor="input-email"
                          >
                             Old Password:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-title"
                            type="text"
                            name="old_password"
                            value={passwordDetails.old_password}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.old_password}</span>

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
                            New Password:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-new_password"
                            type="text"
                            name="new_password"
                            value={passwordDetails.new_password}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.new_password}</span>

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
                            Confirm New Password:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-confirm_new_password"
                            type="text"
                            name="confirm_new_password"
                            value={passwordDetails.confirm_new_password}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                
                <Row className="align-items-center">
                  <Col>
                    <Button
                      color="primary"
                      type="submit" 
                    >
                      save
                    </Button>
                    <Link
                      color="danger"
                      className="btn btn-danger"
                      to={`/seller/profile`}
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
  
  export default ChangePassword;
  