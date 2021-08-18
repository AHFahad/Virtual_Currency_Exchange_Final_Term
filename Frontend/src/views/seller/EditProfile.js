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

  const baseURL="http://localhost:8000/api/seller/profile/updateprofile"
  const BaseURLGET="http://localhost:8000/api/seller/profile"
  const EditProfile = (props) => {
    const history = useHistory();
    const initialize={
        name:"",
        address:"",
        phone_number:"",
        profile_picture_upload:"",
     };
     
    const [profileDetails, setProfileDetails] = useState(initialize);
    const[formValidation,setFormValidation]=useState([]);
    const getData=async()=>{
      const response= await axios.get(BaseURLGET);
      setProfileDetails(response.data.user);
      console.log(profileDetails)
    }

    useEffect(()=>{
      getData();
    }, []);
    const formdata = new FormData();
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProfileDetails({ ...profileDetails, [name]: value });
    };

    
    
    const  handlePicInput=(event)=>{
      let p = event.target.files[0];
      formdata.append("profile_picture", p);
      console.log(formdata.get('profile_picture'));
    }
    const _onSubmit= async(e)=>{
      e.preventDefault();
      console.log(profileDetails.id)
     const product={
        name:profileDetails.name,
        address:profileDetails.address,
        phone_number:profileDetails.phone_number,
        profile_picture:profileDetails.profile_picture_upload,
     }
     console.log(product);
     
    //  often forgets the file
    let imagefile = document.querySelector('#file-input');
    formdata.append("profile_picture", imagefile.files[0]);
    console.log(formdata.get('profile_picture'));


    formdata.append('name',product.name);
    formdata.append('address',product.address);
    formdata.append('phone_number',product.phone_number);
    console.log("test2"+formdata.get('profile_picture'));
       
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
        if(res.data.status=='success') history.push(`/seller/profile`);
        }).catch((error) => {
        console.log(error)
        Swal.fire(
        'somting wentt wrong',
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
                  {
                      <h3 className="mb-0">Edit PRofile</h3>
                  }
                    
                  </Col>
                  <Col className="text-right" xs="4">
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  {
                      (profileDetails.profile_picture)?<Col lg='5'>
                      <img className="card-img-top" style={{ maxHeight:270 ,width:'auto'}} src={ (profileDetails.profile_picture)? "http://localhost:8000/"+profileDetails.profile_picture:'http://localhost:8000/seller/image/demo_product.jpg'}
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
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            User ID: 
                          </label>
                          {profileDetails.id}
                        </FormGroup>
                      </Col>
                  
                      
                      
                    <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Uplaod photo: 
                          </label><br/>
                          <input type="file" id="file-input" name="profile_picture_upload" className="mb-4" onChange={handlePicInput}  />
                          
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                             Name:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-title"
                            type="text"
                            name="name"
                            value={profileDetails.name}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.name}</span>
                        </FormGroup>
                      </Col>
                    
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Phone Number:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-phone_number"
                            type="text"
                            name="phone_number"
                            value={profileDetails.phone_number}
                            onChange={handleInputChange}
                          />
                         <span className="text-danger">{formValidation.phone_number}</span>

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
                            Address:
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                            type="text"
                            name="address"
                            value={profileDetails.address}
                            onChange={handleInputChange}
                          />
                          <span className="text-danger">{formValidation.address}</span>

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
  
  export default EditProfile;
  